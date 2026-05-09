import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  'React.js',
  'React Native',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Redux',
  'Tailwind CSS',
  'REST APIs',
  'Responsive UI'
];

const TechMarquee = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-[#020817] border-y border-white/5">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-transparent to-cyan-500/[0.03]" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'linear'
        }}
        className="flex gap-8 whitespace-nowrap"
      >

        {[...techs, ...techs].map((tech, index) => (

          <div
            key={index}
            className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 text-lg backdrop-blur-xl"
          >
            {tech}
          </div>

        ))}

      </motion.div>

    </section>
  );
};

export default TechMarquee;