import HeroSection from "./components/HeroSection";
import Skills from './components/Skills';
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { motion } from "framer-motion";
import FloatingSocialBar from './components/FloatingSocialBar';
import TechMarquee from './components/TechMarquee';
export default function PortfolioNeonDark() {
  return (
    <div className="bg-[#030014] text-white min-h-screen overflow-x-hidden">

      {/* <Navbar /> */}
      <section id="home">
        <HeroSection />
        <FloatingSocialBar />
        <TechMarquee />
      </section>

      {/* FULL WIDTH SKILLS SECTION */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <Skills />
      </motion.div>

      {/* FULL WIDTH EXPERIENCE SECTION */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <Experience />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <Projects />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
        <Education />
      </motion.div>

      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-20">

        <section id="contact">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <Contact />
          </motion.div>
        </section>

      </div> */}
    </div>
  );
}
