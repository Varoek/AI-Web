
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { HowIWork } from './components/HowIWork';
import { Audience } from './components/Audience';
import { Journey } from './components/Journey';
import { Closing } from './components/Closing';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'audience', label: 'Who For?' },
    { id: 'closing', label: 'Contact' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative">
      {/* Sidebar / Navigation for Desktop */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 no-print">
        {slides.map((slide, idx) => (
          <a
            key={slide.id}
            href={`#${slide.id}`}
            onClick={() => setActiveSlide(idx)}
            className={`group relative flex items-center gap-3 transition-all ${
              activeSlide === idx ? 'scale-110' : 'opacity-40 hover:opacity-100'
            }`}
          >
            <div className={`w-3 h-3 rounded-full transition-colors ${
              activeSlide === idx ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-400'
            }`} />
            <span className={`absolute left-8 whitespace-nowrap text-sm font-medium transition-opacity opacity-0 group-hover:opacity-100 bg-white px-2 py-1 rounded shadow-sm`}>
              {slide.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-3 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200 rounded-full shadow-lg text-sm font-semibold hover:bg-white transition-all text-slate-700"
        >
          <i className="fa-solid fa-file-pdf text-red-500"></i>
          Export PDF
        </button>
      </div>

      {/* Main Content Sections (Slides) */}
      <main className="max-w-screen overflow-hidden">
        <section id="hero" className="print-break"><Hero /></section>
        <section id="about" className="print-break"><About /></section>
        <section id="skills" className="print-break"><Skills /></section>
        <section id="journey" className="print-break"><Journey /></section>
        <section id="workflow" className="print-break"><HowIWork /></section>
        <section id="audience" className="print-break"><Audience /></section>
        <section id="closing" className="print-break"><Closing /></section>
      </main>

      {/* Footer Mobile Nav */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-slate-200 no-print">
        <div 
          className="h-full bg-blue-600 transition-all duration-300" 
          style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default App;
