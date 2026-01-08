
import React from 'react';

export const Closing: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-slate-50 lg:p-24">
      <div className="max-w-4xl w-full bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-blue-200/50 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-bl-full opacity-5"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
          Let’s build something <span className="text-blue-600">practical</span>.
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto">
          Technology should empower you, not confuse you. Feel free to reach out for cloud setup, Python automation, or IT advice.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <a href="mailto:mvaroek@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all group">
            <i className="fa-solid fa-envelope group-hover:scale-110 transition-transform"></i>
            mvaroek@gmail.com
          </a>
          <a href="tel:081908841161" className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all group">
            <i className="fa-solid fa-phone group-hover:rotate-12 transition-transform"></i>
            0819 0884 1161
          </a>
        </div>
        
        <div className="border-t border-slate-100 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <p className="font-bold text-slate-900 text-xl">Muhamad Faroek</p>
              <p className="text-slate-500">Jakarta, Indonesia</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-all no-print">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all no-print">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
