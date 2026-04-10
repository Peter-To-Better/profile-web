"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import SectionDivider from "./SectionDivider";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  return (
    <>
      <SectionDivider variant="geometric" />
      <SectionContainer
        id="contact"
        variant="bordered"
        className="geometric-section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto font-medium">
            You are welcome to contact me for collaboration or to share your
            suggestions.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setSuccess(null);
              setError(null);

              const form = e.currentTarget as HTMLFormElement;
              const formData = new FormData(form);
              const name = String(formData.get("name") || "").trim();
              const email = String(formData.get("email") || "").trim();
              const subject = String(formData.get("subject") || "").trim();
              const message = String(formData.get("message") || "").trim();

              if (!name || !email || !message) {
                setError("Please fill in name, email and message.");
                setLoading(false);
                return;
              }

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email, subject, message }),
                });
                const data = await res.json();
                if (!res.ok || !data.ok)
                  throw new Error(data.error || "Failed to send");

                setSuccess("Message sent successfully!");
                form.reset();
              } catch (err) {
                if (err instanceof Error) {
                  setError(err.message || "Failed to send message");
                } else {
                  setError("Failed to send message");
                }
              } finally {
                setLoading(false);
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-6 py-4 bg-white text-gray-800 border-4 border-black focus:outline-none focus:border-[#ff6b6b] transition-all duration-200 placeholder-gray-400 font-bold"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-6 py-4 bg-white text-gray-800 border-4 border-black focus:outline-none focus:border-[#ff6b6b] transition-all duration-200 placeholder-gray-400 font-bold"
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full px-6 py-4 bg-white text-gray-800 border-4 border-black focus:outline-none focus:border-[#ff6b6b] transition-all duration-200 placeholder-gray-400 font-bold"
                placeholder="What's this about?"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                name="message"
                className="w-full px-6 py-4 bg-white text-gray-800 border-4 border-black focus:outline-none focus:border-[#ff6b6b] transition-all duration-200 placeholder-gray-400 resize-none font-bold"
                placeholder="Tell me about your project or just say hello..."
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <button
                type="submit"
                disabled={loading}
                className="bg-[#ff6b6b] hover:bg-[#ff5252] disabled:opacity-70 disabled:cursor-not-allowed text-white font-black px-10 py-4 text-lg transition-all duration-200 hover:scale-105 relative overflow-hidden group neubrutalism-border neubrutalism-shadow neubrutalism-shadow-hover cursor-pointer"
              >
                <span className="relative z-10">
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </button>

              {success && (
                <p className="mt-4 text-green-600 font-bold">{success}</p>
              )}
              {error && <p className="mt-4 text-red-600 font-bold">{error}</p>}
            </motion.div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-white border-4 border-black p-8 neubrutalism-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Other Ways to Connect
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:peterchen2017125@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#ff6b6b] transition-colors font-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/wei-ren-chen-47320235a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#ff6b6b] transition-colors font-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/ShouShouRen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#ff6b6b] transition-colors font-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.73 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
}
