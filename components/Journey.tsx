
import React from 'react';

export const Journey: React.FC = () => {
  const experiences = [
    {
      role: 'Freelance IT & Cloud Projects',
      company: 'Self-employed',
      period: '01/2024 – Present',
      desc: 'Deployed Odoo ERP on AWS, migrated WordPress sites, and configured Linux security hardening.'
    },
    {
      role: 'Sales Executive',
      company: 'PT Netmarks Indonesia',
      period: '07/2023 – 12/2023',
      desc: 'Achieved IDR 400M revenue in 6 months selling Cisco, Aruba, and HCI solutions (Nutanix/VxRail).'
    },
    {
      role: 'Network Engineer',
      company: 'Javaonline (Kemenag Project)',
      period: '09/2017 – 12/2018',
      desc: 'Configured servers for Haji Khusus App, implemented backup automation and security hardening.'
    },
    {
      role: 'IT Staff',
      company: 'STTI I-Tech',
      period: '02/2015 – 09/2016',
      desc: 'Managed file sharing servers, portal education, and served as Microsoft Certiport proctor.'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white lg:p-24">
      <div className="max-w-5xl w-full">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-12">Professional Journey</h2>
        
        <div className="relative border-l-2 border-slate-100 ml-4 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-[-11px] top-0 w-5 h-5 bg-white border-4 border-blue-600 rounded-full shadow-sm"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                <span className="text-sm font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-blue-500 font-semibold mb-3">{exp.company}</p>
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Certified Excellence</h4>
            <p className="text-slate-400">AWS Certified Cloud Practitioner & Cisco Networking Basics</p>
          </div>
          <div className="flex gap-4">
             <i className="fa-brands fa-aws text-4xl"></i>
             <i className="fa-solid fa-certificate text-4xl text-yellow-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
