
import React from 'react';

export const Audience: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white lg:p-24">
      <div className="max-w-5xl text-center">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-6">Who This Is For</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-16 text-slate-900">
          Ideal for those seeking <span className="underline decoration-blue-500 underline-offset-8">practical IT support</span>.
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-left">
            <div className="w-16 h-16 shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <i className="fa-solid fa-graduation-cap text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Individuals</h4>
              <p className="text-slate-600 text-sm">Anyone learning cloud (AWS) or Python who needs hands-on mentorship.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-left">
            <div className="w-16 h-16 shrink-0 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              <i className="fa-solid fa-rocket text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Small Businesses</h4>
              <p className="text-slate-600 text-sm">Teams starting their IT journey or migrating to the cloud.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-left">
            <div className="w-16 h-16 shrink-0 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              <i className="fa-solid fa-user-tie text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Non-Technical Founders</h4>
              <p className="text-slate-600 text-sm">Decision makers who need clarity before investing in infrastructure.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 text-left">
            <div className="w-16 h-16 shrink-0 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <i className="fa-solid fa-flask text-2xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Early-stage Projects</h4>
              <p className="text-slate-600 text-sm">MVP development needing cost-aware and rapid implementation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
