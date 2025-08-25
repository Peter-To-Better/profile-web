import { Metadata } from "next";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

export const metadata: Metadata = {
  title: "Peter Chen | Profile",
  description:
    "Peter Chen 個人前端工程師作品集頁面，Next.js + TailwindCSS 打造的簡約科技風",
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-gray-800 transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
