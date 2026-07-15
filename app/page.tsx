import InteractiveBg from "@/components/InteractiveBg";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-600 dark:text-zinc-50 overflow-x-hidden selection:bg-cyan-500/30">
      {/* Premium Interactive Spotlight Cursor */}
      <CustomCursor />

      {/* Top indicator for vertical scroll */}
      <ScrollProgress />

      {/* Modern mesh background pattern and glowing orbs */}
      <InteractiveBg />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Primary Landing Page Container */}
      <main className="relative flex flex-col w-full z-10">
        {/* Hero Landing */}
        <Hero />

        {/* Section: About Me */}
        <About />

        {/* Section: Academic & Technical Skills */}
        <Skills />

        {/* Section: Featured Projects */}
        <Projects />

        {/* Section: Engineering Competencies */}
        <Experience />

        {/* Section: Academic Achievements */}
        <Achievements />

        {/* Section: Vertical Education Timeline */}
        <Education />

        {/* Section: Contact & Maps Grid */}
        <Contact />
      </main>

      {/* Footer Credits */}
      <Footer />
    </div>
  );
}
