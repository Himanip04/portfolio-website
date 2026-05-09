import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa';

const FloatingSocialBar = () => {
  return (
    <div className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-5">

      {/* GITHUB */}
      <a
        href="https://github.com/Himanip04"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 text-xl"
      >
        <FaGithub />
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/himani-pant-982a67223/"
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300 text-xl"
      >
        <FaLinkedinIn />
      </a>

      {/* EMAIL */}
      <a
        href="mailto:himanipant333@gmail.com"
        className="text-slate-400 hover:text-blue-300 hover:-translate-y-1 transition-all duration-300 text-xl"
      >
        <FaEnvelope />
      </a>

      {/* LINE */}
      <div className="w-[1px] h-28 bg-gradient-to-b from-blue-500/70 to-transparent" />

    </div>
  );
};

export default FloatingSocialBar;