import React from 'react';
import PracticeAreas from '../components/PracticeAreas';
import { ChevronRight, FileSearch, Hammer, Eye, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Comprehensive Case Analysis',
    desc: 'We analyze your documentation, contract terms, and historical filings, checking statutory databases to evaluate legal feasibility.',
    icon: FileSearch
  },
  {
    num: '02',
    title: 'Pre-Trial Strategy Design',
    desc: 'Our chambers design a customized trial roadmap, drafting pre-trial motions, warning notices, or out-of-court mediation parameters.',
    icon: Eye
  },
  {
    num: '03',
    title: 'Aggressive Courtroom Advocacy',
    desc: 'Advocate Malhotra presents your appeals and writs before the Supreme Court, High Courts, and corporate tribunals.',
    icon: Hammer
  },
  {
    num: '04',
    title: 'Post-Judgment Settlement',
    desc: 'Assisting in execution deeds, compliance audits, debt restructurings, and appeal filings to secure complete resolution.',
    icon: CheckCircle
  }
];

export default function Practices() {
  return (
    <div className="w-full animate-fade-in bg-law-bg-light">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.8), rgba(22, 34, 53, 0.85)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            What We Do
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Practice Specializations
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Practice Areas</span>
          </div>
        </div>
      </div>

      {/* Main Practices section */}
      <PracticeAreas />

      {/* Methodology Process Section */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Chambers Protocol
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Our Legal Methodology
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mt-4">
              We approach every civil, corporate, and property dispute with a structured four-stage process to secure premium outcomes.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Visual connecting line for desktop */}
            <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[1.5px] bg-gray-100 z-0" />
            
            {steps.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-law-bg-light border-2 border-law-gold/30 group-hover:border-law-gold text-law-navy group-hover:text-law-gold rounded-full flex items-center justify-center shadow-md mb-6 hover:scale-105 transition-all duration-300 relative bg-white">
                    <IconComponent size={24} />
                    <span className="absolute -top-2 -right-2 bg-law-gold text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white">
                      {s.num}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-law-navy mb-3 group-hover:text-law-gold transition-colors">{s.title}</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed max-w-[220px]">{s.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Values Callout Panel */}
      <section className="py-16 bg-[#b1976b] text-white px-4 md:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Award size={36} className="text-white/40 mx-auto mb-4" />
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
            Representing Corporate Boards & Indian Families Since 2004
          </h3>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            Our chambers are dedicated to client confidentiality, thorough pre-trial analysis, and aggressive representations before high courts. Contact us today to evaluate your case details.
          </p>
          <Link to="/contact" className="bg-white hover:bg-law-navy text-law-navy hover:text-white font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded shadow-md transition-colors duration-300 inline-block">
            Inquire For Advice
          </Link>
        </div>
      </section>

    </div>
  );
}
