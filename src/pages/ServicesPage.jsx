import React, { useState } from 'react';
import Services from '../components/Services';
import { ChevronRight, Award, ShieldCheck, Scale, CheckCircle, Clock, Users, ArrowRight, HelpCircle, ChevronDown, ChevronUp, AlertCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Matters Won', value: '500+', desc: 'Tribunal decisions and corporate resolutions.' },
  { label: 'Practice Experience', value: '22+ Years', desc: 'Active advocacy in Indian courts.' },
  { label: 'Success Ratio', value: '98%', desc: 'Calculated via settlements and rulings.' },
  { label: 'Active Clients', value: '2,500+', desc: 'Representing companies and families.' }
];

const pillars = [
  {
    title: 'Elite Case Research',
    desc: 'Every file undergoes rigorous legal database analysis and precedent indexing before entering litigation drafts.',
    icon: FileText
  },
  {
    title: 'Tenacious Court Advocacy',
    desc: 'Advocate Aarav Malhotra provides authoritative representation across High Courts, NCLT, SAT, and the Supreme Court.',
    icon: Scale
  },
  {
    title: 'Absolute Client Privilege',
    desc: 'We enforce strict confidentiality frameworks to protect proprietary business details and private family assets.',
    icon: ShieldCheck
  }
];

const steps = [
  {
    num: '01',
    title: 'Advisory Review',
    desc: 'Reviewing statutory contracts, estate documents, or regulatory notices to assess case standing.'
  },
  {
    num: '02',
    title: 'Strategy Formulation',
    desc: 'Drafting legal notices, filing rejoinders, or outlining mediation parameters for dispute settlements.'
  },
  {
    num: '03',
    title: 'Aggressive Trial Filing',
    desc: 'Presenting writs, appeals, and petitions before high courts and national corporate tribunals.'
  },
  {
    num: '04',
    title: 'Complete Execution',
    desc: 'Securing decree implementation, recovery enforcement, and finalizing contract compliance deeds.'
  }
];

const serviceFaqs = [
  {
    q: "How do I initiate a formal legal services request?",
    a: "You can submit your query using our website's Consultation Form or email us directly at counsel@aaravmalhotra.in. Please attach a brief case summary and any relevant court notices or contract documents."
  },
  {
    q: "Are video counsel sessions arranged for corporate clients?",
    a: "Yes, we regularly conduct advisory boards, document audits, and pre-trial mediation reviews via Zoom, Google Meet, or Microsoft Teams for international clients and corporate boards."
  },
  {
    q: "Do you offer legal documentation drafting services?",
    a: "Yes, we draft, review, and audit commercial vendor agreements, joint venture contracts, partition deeds, and non-disclosure deeds, ensuring strict compliance with local statutes."
  },
  {
    q: "How does the chamber calculate fee retainers?",
    a: "Initial consults are billed at a flat rate. Full court appearances, tribunal hearings, and document drafting projects are structured under professional retainer terms customized to case complexity."
  }
];

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="w-full bg-law-bg-light animate-fade-in text-gray-900 font-sans">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.85), rgba(22, 34, 53, 0.95)), url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Core Expertise
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Our Core Services
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Services</span>
          </div>
        </div>
      </div>

      {/* 1. Full Services Cards Grid (10 services) */}
      <Services />

      {/* 2. Success Statistics counters */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200/80 rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-3xl font-bold text-law-navy font-serif">{s.value}</h3>
                <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">{s.label}</p>
                <p className="text-[11px] text-gray-400 font-light mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us / Pillars */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Chambers Ideology
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Why Clients Choose Adv. Aarav Malhotra
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div 
                  key={idx} 
                  className="p-8 bg-law-bg-light border border-gray-100 rounded-lg flex flex-col items-center text-center group hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center mb-5 group-hover:bg-law-gold group-hover:text-white transition-colors duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="font-serif font-bold text-base text-law-navy mb-3">{p.title}</h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Legal Process Timeline */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Our Protocol
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              The Service Delivery Process
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[1.5px] bg-gray-200 z-0" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm relative z-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
                <span className="w-10 h-10 rounded-full bg-law-gold text-white font-bold text-xs flex items-center justify-center shadow-md mb-4 group-hover:bg-law-navy transition-colors">
                  {step.num}
                </span>
                <h4 className="font-serif font-bold text-base text-law-navy mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Practice Area Highlights */}
      <section className="py-20 bg-white px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
            Specialization Links
          </span>
          <h2 className="font-serif text-3xl font-bold text-law-navy mb-6">
            Practice Area Highlights
          </h2>
          <div className="w-16 h-[2px] bg-law-gold mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Banking & Financial', 'Corporate Advisory', 'Family Law', 'Property Disputes', 'Employment Law', 'Capital Markets'].map((pa, idx) => (
              <Link 
                key={idx}
                to="/practice-areas"
                className="text-xs font-semibold text-gray-600 hover:text-law-gold bg-white border border-gray-200 px-4 py-2.5 rounded hover:shadow-sm transition-all"
              >
                {pa}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="text-law-gold mx-auto mb-4" size={32} />
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Services FAQs
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} 
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm md:text-base text-law-navy">
                    {faq.q}
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp className="text-law-gold flex-shrink-0" size={18} />
                  ) : (
                    <ChevronDown className="text-law-gold flex-shrink-0" size={18} />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFaq === idx ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm font-light text-gray-600 leading-relaxed bg-white">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Consultation CTA Banner */}
      <section className="py-16 bg-[#b1976b] text-white px-4 md:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <AlertCircle size={36} className="text-white/40 mx-auto mb-4" />
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
            Need High-Caliber Legal Representation?
          </h3>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            Schedule an initial advisory consult directly with Advocate Aarav Malhotra's Connaught Place office. Let us analyze your documentation.
          </p>
          <Link to="/contact" className="bg-white hover:bg-law-navy text-law-navy hover:text-white font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded shadow-md transition-colors duration-300 inline-block">
            Schedule Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
