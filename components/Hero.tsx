
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl z-10">
        <div className="mb-6 inline-block py-1 px-4 bg-blue-500/20 rounded-full border border-blue-400/30 text-blue-300 font-medium tracking-wide animate-fade-in">
          MUHAMAD FAROEK — PORTFOLIO 2024
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Practical IT & Cloud Support — <span className="text-blue-400">Built from Real Experience</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I help individuals and small businesses build, deploy, and understand their IT systems with a practical, step-by-step approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <i className="fa-brands fa-python text-3xl text-yellow-400 mb-4 block"></i>
            <h3 className="text-lg font-semibold mb-2">Python Expert</h3>
            <p className="text-slate-400 text-sm">Automation, script optimization, and backend logic.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <i className="fa-brands fa-aws text-3xl text-orange-400 mb-4 block"></i>
            <h3 className="text-lg font-semibold mb-2">AWS Practitioner</h3>
            <p className="text-slate-400 text-sm">Deployment, migration, and EC2 instance management.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <i className="fa-solid fa-comments text-3xl text-green-400 mb-4 block"></i>
            <h3 className="text-lg font-semibold mb-2">IT Consultant</h3>
            <p className="text-slate-400 text-sm">Translating complex tech into business value.</p>
          </div>
        </div>

        <div className="mt-12 no-print">
          <a href="#about" className="animate-bounce text-slate-400 hover:text-white transition-colors">
            <i className="fa-solid fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
