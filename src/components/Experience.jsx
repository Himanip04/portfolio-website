import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    company: 'Evon Technologies',
    role: 'Associate Developer',
    duration: 'Jul 2023 - Aug 2025',
    points: [
      'Developed scalable web and mobile interfaces using React.js and React Native.',
      'Built reusable UI components and responsive layouts for modern applications.',
      'Integrated REST APIs and optimized frontend workflows for better performance.',
      'Collaborated with Agile teams to deliver high-quality user experiences.',
      'Improved application functionality and reduced software issues through testing & debugging.'
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-16 md:py-20 bg-[#020817] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <p className="text-blue-400 uppercase tracking-[3px] text-xs mb-2">
            MY JOURNEY
          </p>

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Professional experience building scalable frontend applications,
            modern interfaces, and responsive digital products.
          </p>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">

          {/* CENTER LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] md:w-[2px] bg-gradient-to-b from-blue-500/80 via-cyan-400/40 to-transparent" />

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >

              {/* TIMELINE DOT */}
              <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 z-20">

                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center border border-white/20">

                  <FaBriefcase className="text-white text-xs md:text-sm" />

                </div>

              </div>

              {/* CARD */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
                className="ml-12 md:ml-0 md:w-[45%] rounded-xl md:rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-4 md:p-6 relative overflow-hidden group transition-all duration-500"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />

                {/* TOP GLOW */}
                <div className="absolute -top-16 -right-16 w-[100px] h-[100px] bg-blue-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* DURATION */}
                  <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm mb-3 md:mb-4 tracking-wide">
                    {exp.duration}
                  </span>

                  {/* ROLE */}
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3">
                    {exp.role}
                  </h3>

                  {/* COMPANY */}
                  <p className="text-cyan-300 text-sm md:text-base mb-4 md:mb-6 font-medium">
                    {exp.company}
                  </p>

                  {/* POINTS */}
                  <div className="space-y-3 md:space-y-4">

                    {exp.points.map((point, i) => (

                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >

                        <div className="mt-1 min-w-[6px] h-[6px] md:min-w-[8px] md:h-[8px] rounded-full bg-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

                        <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                          {point}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;