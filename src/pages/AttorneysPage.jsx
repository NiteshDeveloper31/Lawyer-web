import React from 'react';
import Attorneys from '../components/Attorneys';
import { ChevronRight, Award, ShieldCheck, Scale, Mail, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Client Confidentiality',
    desc: 'We enforce standard non-disclosure policies regarding all pre-trial consultation documents and board strategies.',
    icon: ShieldCheck
  },
  {
    title: 'Precedent Databases',
    desc: 'Our associate counsel regularly index case law amendments and NCLT/Supreme Court precedents before files enter court.',
    icon: Award
  },
  {
    title: 'Ethical Integrity',
    desc: 'Advocate Aarav Malhotra enforces an absolute code-of-conduct in court filings, ensuring high ethical standards.',
    icon: Scale
  }
];

export default function AttorneysPage() {
  return (
    <div className="w-full animate-fade-in bg-law-bg-light">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.8), rgba(22, 34, 53, 0.85)), url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Our Associates
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Our Legal Team
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Attorneys</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <Attorneys />

      {/* Chambers Professional Values Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Chambers Ideology
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Our Professional Standards
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mt-4">
              Behind Advocate Aarav Malhotra is a dedicated counsel team operating with absolute precision and commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div key={idx} className="p-8 bg-white border border-gray-200/80 rounded-lg shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center mb-5 group-hover:bg-law-gold group-hover:text-white transition-colors duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="font-serif font-bold text-base text-law-navy mb-2">{v.title}</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Career Opportunities / Join Us Section */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-law-bg-light border border-gray-200/80 rounded-xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Briefcase size={22} />
            </div>
            <div>
              <span className="text-[10px] text-law-gold uppercase tracking-widest font-semibold block mb-1">
                Careers & Internships
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-law-navy">
                Looking to Join Our Delhi Chambers?
              </h3>
              <p className="text-gray-500 text-xs md:text-sm font-light mt-1.5 leading-relaxed max-w-xl">
                We are always seeking brilliant legal interns, associate advocates, and document researchers with stellar NLSU records. Send your CV directly to our chambers recruiting desk.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="mailto:info@aaravmalhotra.in" 
              className="bg-law-gold hover:bg-law-navy text-white hover:text-white font-bold uppercase tracking-widest text-xs px-6 py-4 rounded shadow-md transition-colors duration-300 flex items-center gap-2"
            >
              <Mail size={14} />
              <span>Send Your CV</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
