
import React from 'react';

export const HowIWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand the Problem',
      desc: 'I listen first — your business goals always come before the technology stack.'
    },
    {
      num: '02',
      title: 'Design Simple Solutions',
      desc: 'No overengineering. I only propose what is necessary and cost-effective for your scale.'
    },
    {
      num: '03',
      title: 'Execute or Assist',
      desc: 'Whether it is hands-on setup or guided implementation, I ensure things work correctly.'
    },
    {
      num: '04',
      title: 'Explain & Document',
      desc: 'I provide documentation and training so you are never dependent on me forever.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center p-8 bg-slate-900 text-white lg:p-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-[-20deg] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto w-full z-10">
        <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-16">The Workflow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <span className="text-5xl font-black text-white/10 group-hover:text-blue-400/20 transition-colors block mb-6">
                {step.num}
              </span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
