import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B.Tech in Computer Science',
    institute: 'Uttarakhand Technical University, Dehradun',
    year: '2020 - 2023',
    description:
      'Focused on software development, frontend engineering, databases, and modern application development with practical project implementation.'
  },

  {
    degree: 'Diploma in Computer Science',
    institute: 'Uttarakhand Board of Technical Education, Roorkee',
    year: '2017 - 2020',
    description:
      'Built strong fundamentals in programming, computer systems, web technologies, and software engineering concepts.'
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full py-16 md:py-20 bg-[#020817] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <p className="text-blue-400 uppercase tracking-[3px] text-xs mb-2">
            EDUCATION
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Academic Journey
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            My academic background that shaped my technical foundation,
            problem-solving abilities, and passion for frontend development.
          </p>

        </motion.div>

        {/* EDUCATION CARDS */}
        <div className="relative w-full max-w-4xl mx-auto">

          {/* CENTER LINE */}
          <div className="absolute left-5 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/80 via-cyan-400/40 to-transparent" />

          {educationData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-20 ${
                index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              }`}
            >

              {/* TIMELINE DOT */}
              <div className="absolute left-[6px] md:left-1/2 md:-translate-x-1/2 z-20">

                <div className="w-11 h-11 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center border border-white/20">

                  <FaGraduationCap className="text-white text-lg" />

                </div>

              </div>

              {/* CARD */}
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02
                }}
                className="ml-12 md:ml-0 md:w-[45%] relative overflow-hidden rounded-xl md:rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-4 md:p-6 transition-all duration-500 hover:border-blue-500/40"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/[0.03] to-transparent pointer-events-none" />

                {/* TOP GLOW */}
                <div className="absolute -top-16 -right-16 w-[100px] h-[100px] bg-blue-500/20 blur-[60px] rounded-full opacity-0 hover:opacity-100 transition-all duration-500" />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* YEAR */}
                  <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm mb-4 md:mb-5 tracking-wide">
                    {item.year}
                  </span>

                  {/* DEGREE */}
                  <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-3 md:mb-4">
                    {item.degree}
                  </h3>

                  {/* INSTITUTE */}
                  <p className="text-cyan-300 text-sm md:text-base mb-4 md:mb-5 font-medium">
                    {item.institute}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;