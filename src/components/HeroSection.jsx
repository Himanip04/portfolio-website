import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

// IMPORT IMAGE
import girlImage from '../assets/girl.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020817] overflow-hidden flex items-center"
    >

      {/* BLUE GLOW */}
      <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-130px] right-[-90px] w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* SMALL TEXT */}
            <p className="text-blue-400 text-lg mb-4 font-medium tracking-[3px] uppercase">
              👋 Frontend Developer
            </p>

            {/* MAIN HEADING */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Hi, I'm <br />

              <span className="text-blue-400">
                Himani Pant
              </span>
            </h1>

            {/* SUBHEADING */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-8 leading-snug">
              Building Modern Web & Mobile
              Experiences with React.js
              and React Native
            </h2>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">

              {/* PROJECT BUTTON */}
              <a
                href="#projects"
                className="group bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl flex items-center justify-center gap-3 font-medium text-base sm:text-lg shadow-[0_0_40px_rgba(37,99,235,0.35)] hover:scale-105 transition-all duration-300"
              >
                View Projects

                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* RESUME BUTTON */}
              <a
                href="/resume.pdf"
                download
                className="border border-slate-700 hover:border-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl flex items-center justify-center gap-3 font-medium text-base sm:text-lg bg-white/5 backdrop-blur-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
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

            {/* CODE CARD */}
            <div className="relative w-full max-w-[580px] min-h-[520px] sm:min-h-[520px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden p-6 sm:p-10">

              {/* CODE CONTENT */}
              <div className="space-y-4 font-mono text-xs sm:text-sm md:text-base">

                <p className="text-blue-400">
                  import React from 'react';
                </p>

                <p className="text-cyan-300">
                  const Developer = () =&gt; {'{'}
                </p>

                <p className="text-slate-300 ml-6">
                  name:
                  <span className="text-green-400">
                    {' '} 'Himani Pant',
                  </span>
                </p>

                <p className="text-slate-300 ml-6">
                  role:
                  <span className="text-yellow-300">
                    {' '} 'Frontend Developer',
                  </span>
                </p>

                <p className="text-slate-300 ml-6">
                  skills:
                  <span className="text-pink-400">
                    {' '} ['React.js', 'React Native','JavaScript','TypeScript','Next.js','Redux','REST APIs',
                'Responsive UI'],
                  </span>
                </p>

                <p className="text-slate-300 ml-6">
                  experience:
                  <span className="text-orange-300">
                    {' '} '2+ Years'
                  </span>
                </p>

                <p className="text-cyan-300">
                  {'}'}
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
                className="absolute bottom-0 right-0 md:right-[-20px] w-[220px] sm:w-[280px] md:w-[360px] lg:w-[400px] object-contain drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;