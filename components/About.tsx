
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white lg:p-24">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Focusing on Practical Solutions That <span className="text-blue-600">Actually Work</span>.
          </h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            I come from an IT infrastructure background with experience across system setup, cloud experimentation, and real-world deployment projects.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Rather than theory-heavy solutions, I focus on implementations that are understandable, maintainable, and cost-effective.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: 'fa-check-circle', label: '10+ Years Experience' },
              { icon: 'fa-cloud', label: 'AWS Certified' },
              { icon: 'fa-chart-line', label: 'IDR 400M Sales Record' },
              { icon: 'fa-code', label: 'Python Automation' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <i className={`fa-solid ${item.icon} text-blue-600 text-xl`}></i>
                <span className="font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/800/800?grayscale" alt="Muhamad Faroek" className="w-full h-full object-cover" />
          </div>
          {/* Beliefs Card */}
          <div className="absolute -bottom-8 -left-8 lg:-left-12 bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
            <h4 className="font-bold mb-4 text-xl">My Core Values</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-medium">
                <i className="fa-solid fa-lightbulb"></i> Understandable
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <i className="fa-solid fa-wrench"></i> Maintainable
              </li>
              <li className="flex items-center gap-2 text-sm font-medium">
                <i className="fa-solid fa-dollar-sign"></i> Cost-effective
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
