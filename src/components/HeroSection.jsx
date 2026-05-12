import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

// IMPORT GIRL IMAGE
import girlImage from '../assets/girl.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020817] overflow-hidden flex items-center"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* SMALL TEXT */}
            <p className="text-blue-400 text-lg mb-4 font-medium tracking-[3px] uppercase">
              👋 Frontend Developer
            </p>

            {/* MAIN HEADING */}
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Hi, I'm <br />

              <span className="text-blue-400">
                Himani Pant
              </span>
            </h1>

            {/* SUBHEADING */}
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-8 leading-snug">
              Building Modern Web & Mobile
              Experiences with React.js
              and React Native
            </h2>

            {/* DESCRIPTION */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
              Frontend Developer with 2+ years of experience creating scalable,
              responsive, and user-focused applications using React.js,
              React Native, JavaScript, TypeScript, and modern frontend technologies.
              Passionate about clean UI architecture, reusable components,
              and seamless user experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">

              {/* PROJECT BUTTON */}
              <a
                href="#projects"
                className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-medium text-lg shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:scale-105 transition-all duration-300"
              >
                View Projects

                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* RESUME BUTTON */}
              <a
                href="/Resume_Himani.pdf"
                download="Himani_Pant_Resume.pdf"
                className="border border-slate-700 hover:border-blue-500 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-medium text-lg bg-white/5 backdrop-blur-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                Download Resume

                <FaDownload />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            {/* GLOW */}
            <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full" />

            {/* FLOATING BADGE 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4
              }}
              className="absolute top-10 left-0 z-20 px-6 py-3 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-2xl text-white shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >
              <p className="text-blue-400 text-sm mb-1">
                EXPERIENCE
              </p>

              <h4 className="text-lg font-semibold">
                2+ Years
              </h4>
            </motion.div>

            {/* FLOATING BADGE 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5
              }}
              className="absolute bottom-20 left-[-20px] z-20 px-6 py-3 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-2xl text-white shadow-[0_0_30px_rgba(37,99,235,0.15)]"
            >
              <p className="text-cyan-300 text-sm mb-1">
                SPECIALIZED IN
              </p>

              <h4 className="text-lg font-semibold">
                React & Next js 
              </h4>
            </motion.div>

            {/* MAIN CARD */}
            <div className="relative w-full max-w-[580px] h-[580px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden p-10">

              {/* CODE TEXT */}
              <div className="space-y-5 font-mono text-sm md:text-lg">

                <p className="text-blue-400">
                  import React from 'react';
                </p>

                <p className="text-slate-300">
                  function Home() {'{'}
                </p>

                <p className="text-slate-300 ml-10">
                  return (
                </p>

                <p className="text-slate-300 ml-16">
                  {'<div className="container">'}
                </p>

                <p className="text-blue-300 ml-24">
                  {'<h1 className="hero">'}
                </p>

                <p className="text-white ml-32">
                  Hi, I'm Himani
                </p>

                <p className="text-blue-300 ml-24">
                  {'</h1>'}
                </p>

                <p className="text-slate-300 ml-16">
                  {'</div>'}
                </p>

                <p className="text-slate-300 ml-10">
                  )
                </p>

                <p className="text-slate-300">
                  {'}'}
                </p>

                <p className="text-blue-400 mt-10">
                  export default Home;
                </p>

              </div>

              {/* GIRL IMAGE */}
              <motion.img
                src={girlImage}
                alt="girl"
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut'
                }}
                className="absolute bottom-0 right-[-20px] w-[360px] md:w-[400px] object-contain drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;