import React from 'react';
import { motion } from 'framer-motion';

import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';

import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiReactquery
} from 'react-icons/si';

const skills = [
  {
    name: 'React.js',
    icon: <FaReact />,
    desc: 'Modern scalable frontend applications'
  },
  {
    name: 'React Native',
    icon: <FaReact />,
    desc: 'Cross-platform mobile app development'
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
    desc: 'Dynamic and interactive web experiences'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    desc: 'Type-safe scalable frontend architecture'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    desc: 'SEO optimized React applications'
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
    desc: 'Efficient global state management'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    desc: 'Modern responsive UI styling'
  },
  {
    name: 'React Query',
    icon: <SiReactquery />,
    desc: 'Efficient API state handling'
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    desc: 'Version control & collaboration'
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    desc: 'Project hosting & teamwork'
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    desc: 'Semantic modern markup'
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    desc: 'Responsive UI & animations'
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-20 bg-[#020817] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Building beautiful, scalable, and high-performance
            digital experiences using modern frontend technologies
            and clean UI architecture.
          </p>

        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-4 hover:border-blue-500/40 transition-all duration-500"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />

              {/* TOP GLOW */}
              <div className="absolute -top-16 -right-16 w-[80px] h-[80px] bg-blue-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* ICON */}
              <div className="relative z-10 mb-3">

                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/10 flex items-center justify-center text-lg text-blue-400 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">

                  {skill.icon}

                </div>

              </div>

              {/* CONTENT */}
              <div className="relative z-10">

                <h3 className="text-white text-xs md:text-sm font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>

                <p className="text-slate-400 leading-tight text-[10px] md:text-xs hidden md:block">
                  {skill.desc}
                </p>

              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500" />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;