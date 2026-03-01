import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL; // set in .env.local
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!TO_EMAIL) {
      return NextResponse.json(
        { ok: false, error: "CONTACT_TO_EMAIL not configured" },
        { status: 500 }
      );
    }

    const html = `
      <div style="font-family: Inter, Arial, sans-serif;">
        <h2 style="margin:0 0 12px 0;">New message from portfolio</h2>
        <p style="margin:4px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin:4px 0;"><strong>Email:</strong> ${email}</p>
        <p style="margin:4px 0;"><strong>Subject:</strong> ${
          subject || "(No subject)"
        }</p>
        <hr style="margin:12px 0;"/>
        <p style="white-space:pre-wrap;">${message}</p>
      </div>
    `.trim();

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: (err as Error)?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
