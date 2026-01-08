
import React from 'react';

export const Skills: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-8 bg-slate-50 lg:p-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-slate-400 font-bold tracking-widest uppercase mb-12 text-center">Skills & Capabilities</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Python */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-brands fa-python text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">Python Automation</h3>
            <p className="text-slate-500 mb-6 text-sm">Using Python as a practical tool for real-world problem solving.</p>
            <ul className="space-y-3 mb-8">
              {['Intermediate Scripting', 'File Operations & Error Handling', 'Backend Logic Utilities', 'AI-Assisted Code Refactoring'].map((skill, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <i className="fa-solid fa-circle-check text-blue-500 mt-1"></i>
                  {skill}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Best For:</span>
              <p className="text-xs text-slate-500 italic">"Data processing basics, simple automation, and supporting server tasks."</p>
            </div>
          </div>

          {/* AWS */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow ring-2 ring-orange-100">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-brands fa-aws text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">AWS Cloud (EC2)</h3>
            <p className="text-slate-500 mb-6 text-sm">Hands-on experience deploying and managing workloads on Ubuntu/Linux.</p>
            <ul className="space-y-3 mb-8">
              {['Launch & Configure EC2', 'Web App Deployment (WordPress/Odoo)', 'Elastic IPs & Security Groups', 'Local to Cloud Migration'].map((skill, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <i className="fa-solid fa-circle-check text-orange-500 mt-1"></i>
                  {skill}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Scope:</span>
              <p className="text-xs text-slate-500 italic">"Small business cloud setups and early-stage deployments."</p>
            </div>
          </div>

          {/* Consulting */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-lightbulb text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">IT Consulting</h3>
            <p className="text-slate-500 mb-6 text-sm">Helping non-technical founders and small teams make informed decisions.</p>
            <ul className="space-y-3 mb-8">
              {['On-prem vs Cloud Strategy', 'Network & Server Planning', 'Cost Awareness & Optimization', 'Technical Requirement Translating'].map((skill, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                  {skill}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Style:</span>
              <p className="text-xs text-slate-500 italic">"Honest, clear explanations without the technical jargon."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
