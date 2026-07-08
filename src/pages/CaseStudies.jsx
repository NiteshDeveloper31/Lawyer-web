import React, { useState } from 'react';
import { ChevronRight, Award, ShieldCheck, Scale, CheckCircle, Clock, Users, Calendar, AlertCircle, ArrowRight, X, ChevronLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import lawyerImg from '../assets/indian_lawyer_portrait.jpg';

// Case studies content
const casesList = [
  {
    id: 1,
    title: 'Metropolitan Infrastructure Land Acquisition',
    category: 'Property',
    court: 'High Court of Delhi',
    result: '40% Compensation Increase Awarded',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    challenge: 'A consortium of 150+ landowners faced forced government acquisition of their ancestral lands for highway expansion at severe under-market valuation rates.',
    strategy: 'Our chambers filed writ petitions challenging the state\'s valuation methodology, presenting third-party geographic surveys and recent private land sales records as evidence.',
    victory: 'The High Court ordered a complete re-valuation, securing a 40% compensation increment and establishing new guidelines for municipal land valuations in Delhi.',
    impact: 'Formed a core precedent for municipal compensation calculations under the Land Acquisition Act.',
    practiceArea: 'Property Disputes',
    featured: true
  },
  {
    id: 2,
    title: 'Shareholder Boardroom Hostile Takeover',
    category: 'Corporate',
    court: 'National Company Law Tribunal (NCLT)',
    result: 'Emergency Injunction Issued',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    challenge: 'The founding directors of a leading logistics corporation were threatened with a hostile board takeover through illegal share diluting allocations initiated by foreign venture partners.',
    strategy: 'Drafted and filed emergency petitions under Section 241/242 of the Companies Act regarding oppression and mismanagement, demonstrating breach of shareholder agreements.',
    victory: 'The NCLT issued an emergency injunction staying the share allocation, keeping boardroom voting rights locked and securing founder control.',
    impact: 'Protected founders\' controlling equity stake and stabilized company operations.',
    practiceArea: 'Corporate Law'
  },
  {
    id: 3,
    title: 'SEBI Algorithmic Trading Appeal',
    category: 'Corporate',
    court: 'Securities Appellate Tribunal (SAT)',
    result: 'INR 45M Penalty Set Aside',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
    challenge: 'A prominent New Delhi brokerage house faced a severe SEBI audit penalty of INR 45 million due to alleged latency audit failures in their algorithmic trading channels.',
    strategy: 'Presented audit logs demonstrating that the latency variance was caused by external state exchange network outages rather than internal system non-compliance.',
    victory: 'SAT accepted the technical defense logs and set aside all financial penalties, clearing the brokerage house of regulatory misconduct charges.',
    impact: 'Clarified the scope of liability for brokerages regarding external exchange downtime.',
    practiceArea: 'Capital Markets'
  },
  {
    id: 4,
    title: 'Mehra Family Estate Partition Dispute',
    category: 'Family',
    court: 'Civil Appellate Division',
    result: 'INR 1.2 Billion Asset Split Mediated',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    challenge: 'A multi-party dispute regarding the division of ancestral commercial holdings in Connaught Place threatened to tie up family assets in court for decades.',
    strategy: 'Instead of prolonged litigation, we initiated structured mediation sessions in our chambers, designing a detailed division deed that balanced real estate equity values.',
    victory: 'All family members signed the custom division deed, settling the estate partition within 6 months and avoiding public court battles.',
    impact: 'Avoided public asset locking and minimized tax liabilities through structured partitions.',
    practiceArea: 'Family Law'
  },
  {
    id: 5,
    title: 'POSH Guidelines Wrongful Retaliation Claim',
    category: 'Employment',
    court: 'Delhi Labor Commissioner Office',
    result: 'Retaliatory Claim Dismissed',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
    challenge: 'A multinational corporate board faced a retaliatory wrongful dismissal and defamation claim filed by a terminated executive who breached code-of-conduct terms.',
    strategy: 'Presented documented compliance records of the firm\'s internal POSH committee investigations, proving the termination was strictly code-of-conduct based.',
    victory: 'The labor panel dismissed the executive\'s claim in its entirety, vindicating the company\'s administrative actions and guidelines.',
    impact: 'Vindicated corporate compliance standing and protected brand reputation.',
    practiceArea: 'Employment Law'
  },
  {
    id: 6,
    title: 'Corporate Debt Restructuring Foreclosure Block',
    category: 'Banking',
    court: 'Debt Recovery Appellate Tribunal (DRAT)',
    result: 'Foreclosure Stayed & Repayment Enforced',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80',
    challenge: 'A regional manufacturing unit was hit with a bank foreclosure notice under the SARFAESI Act, threatening immediate asset auctions and job losses.',
    strategy: 'Filed appeals proving technical procedural oversights in the bank\'s auction notification, while proposing a structured repayment schedule based on active purchase orders.',
    victory: 'DRAT stayed the asset auction and approved the 36-month debt restructuring repayment plan, keeping the factory active.',
    impact: 'Protected manufacturing unit operations and secured regional employment.',
    practiceArea: 'Banking & Financial'
  },
  {
    id: 7,
    title: 'Defense In Wrongful Arrest Writ',
    category: 'Criminal',
    court: 'High Court of Delhi',
    result: 'Bail Issued & Case Discharged',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
    challenge: 'An executive director of an auto parts exporter was wrongly detained under allegations of financial embezzlement without a formal warrant request.',
    strategy: 'Filed an emergency Habeas Corpus writ petition before the High Court, challenging the procedural legality of the arrest and the lack of primary evidence.',
    victory: 'The High Court ordered immediate bail release and subsequently quashed the FIR based on lack of actionable evidence.',
    impact: 'Enforced procedural arrest limits under Section 41A of the CrPC.',
    practiceArea: 'Criminal Defense'
  }
];

const testimonials = [
  {
    quote: "Adv. Aarav Malhotra resolved our family property partition suit within 6 months. His strategy was meticulous and saved us years of stressful trial litigation. Absolute professional.",
    author: "Ramesh Gupta",
    role: "Real Estate Developer"
  },
  {
    quote: "His representation before the Securities Appellate Tribunal was masterclass. Aarav Malhotra possesses deep authority on compliance, SEBI rules, and corporate defenses.",
    author: "Priya Sharma",
    role: "Chief Counsel, FinTech Corp"
  },
  {
    quote: "Strategic, ethical, and highly detailed. Adv. Malhotra is our go-to senior advocate for all complex shareholder contract disputes and insolvency litigation cases in New Delhi.",
    author: "Sunil Varma",
    role: "Managing Director, Varma Logistics"
  }
];

const faqs = [
  {
    q: "Are the case details shown here publicly accessible?",
    a: "Yes, all case studies listed here represent matters of public record filed before the High Courts, NCLT, and statutory appellate tribunals. Personal identification details have been briefly summarized to respect client privacy."
  },
  {
    q: "Do you represent trial courts or only appellate divisions?",
    a: "Chambers of Adv. Aarav Malhotra handle complex litigation matters at trial court levels, national tribunals (NCLT, DRT, NCDRC), High Courts, and appeals before the Supreme Court of India."
  },
  {
    q: "How does the chamber manage confidentiality for active disputes?",
    a: "We operate under absolute advocate-client privilege. Active case files are securely hosted on encrypted databases, and research materials are reviewed strictly within our chambers in Connaught Place."
  }
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const categories = ['All', 'Corporate', 'Criminal', 'Family', 'Property', 'Banking', 'Employment'];

  const filteredCases = activeTab === 'All' 
    ? casesList 
    : casesList.filter(c => c.category === activeTab);

  const featuredCase = casesList.find(c => c.featured);

  const handleNextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-law-bg-light animate-fade-in text-gray-900 font-sans">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.85), rgba(22, 34, 53, 0.95)), url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Proven Results
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Portfolio & Case Studies
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Portfolio</span>
          </div>
        </div>
      </div>

      {/* Meet Lead Counsel Portfolio Intro Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Portrait & Small Stats */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative max-w-xs w-full mb-6">
                <div className="bg-white p-3 rounded-lg shadow-xl border-2 border-law-gold overflow-hidden">
                  <img 
                    src={lawyerImg} 
                    alt="Advocate Aarav Malhotra" 
                    className="w-full h-auto object-cover rounded shadow-inner"
                  />
                </div>
              </div>
              <h3 className="font-serif font-bold text-xl text-law-navy text-center">Adv. Aarav Malhotra</h3>
              <p className="text-xs text-law-gold uppercase tracking-wider font-semibold mt-1 text-center">Lead Counsel / Senior Advocate</p>
            </div>

            {/* Right Column: Narrative Portfolio Intro */}
            <div className="lg:col-span-8">
              <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                Advocacy and Track Record
              </span>
              <h2 className="font-serif text-3xl font-bold text-law-navy mb-6">
                Chambers Portfolio of Judgments and Settlements
              </h2>
              <div className="w-16 h-[2px] bg-law-gold mb-6" />
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Over the past two decades, Advocate Aarav Malhotra has formulated pre-trial roadmaps and represented clients in landmark appeals before the High Court of Delhi, corporate tribunals (NCLT, SAT, DRT), and the Supreme Court of India. 
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Our portfolio details core corporate compliance audits, commercial debt restructuring foreclosures, high-stakes ancestral property splits in Connaught Place, and successful corporate takeovers protections. Explore our litigation methodology below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Cards Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-gray-200/80 rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <CheckCircle size={32} className="text-law-gold mb-4" />
              <h3 className="text-3xl font-bold text-law-navy font-serif">500+</h3>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Cases Won</p>
              <p className="text-[11px] text-gray-400 font-light mt-1">Favorable verdicts & corporate settlements.</p>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Clock size={32} className="text-law-gold mb-4" />
              <h3 className="text-3xl font-bold text-law-navy font-serif">22+ Years</h3>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Experience</p>
              <p className="text-[11px] text-gray-400 font-light mt-1">Litigating in high courts & appellate panels.</p>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Award size={32} className="text-law-gold mb-4" />
              <h3 className="text-3xl font-bold text-law-navy font-serif">98%</h3>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Success Rate</p>
              <p className="text-[11px] text-gray-400 font-light mt-1">Calculated via resolutions & mediations.</p>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Users size={32} className="text-law-gold mb-4" />
              <h3 className="text-3xl font-bold text-law-navy font-serif">2500+</h3>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Clients Served</p>
              <p className="text-[11px] text-gray-400 font-light mt-1">Corporate boards, private trusts, and families.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Case (large highlighted card) */}
      {featuredCase && (
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                Featured Case
              </span>
              <h2 className="font-serif text-3xl font-bold text-law-navy">
                Landmark Victory Highlight
              </h2>
              <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
            </div>

            <div className="bg-law-bg-light border border-gray-200 rounded-xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
              {/* Left visual column */}
              <div className="lg:w-1/2 relative h-64 lg:h-auto min-h-[350px]">
                <img 
                  src={featuredCase.image} 
                  alt={featuredCase.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute top-6 left-6 bg-law-gold text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded shadow-md">
                  Featured Case Study
                </span>
              </div>

              {/* Right content column */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-4 border-b border-gray-200/60 pb-3">
                    <span className="font-semibold text-law-gold uppercase tracking-wider">{featuredCase.court}</span>
                    <span>{featuredCase.result}</span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-law-navy mb-6 leading-tight">
                    {featuredCase.title}
                  </h3>

                  <div className="space-y-4 text-xs md:text-sm text-gray-600 font-light mb-8">
                    <div>
                      <strong className="text-law-navy font-semibold uppercase tracking-wider text-[10px] block mb-1">The Challenge:</strong>
                      <p>{featuredCase.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-law-navy font-semibold uppercase tracking-wider text-[10px] block mb-1">Chamber Strategy:</strong>
                      <p>{featuredCase.strategy}</p>
                    </div>
                    <div>
                      <strong className="text-law-navy font-semibold uppercase tracking-wider text-[10px] block mb-1">Final Outcome:</strong>
                      <p className="text-emerald-700 font-normal">{featuredCase.victory}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-gray-200/60 pt-6">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-law-gold flex-shrink-0" />
                    <div>
                      <h5 className="text-[9px] uppercase font-bold text-law-navy">Practice Area</h5>
                      <p className="text-xs text-gray-500 font-light">{featuredCase.practiceArea}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCase(featuredCase)}
                    className="bg-law-navy hover:bg-law-gold text-white hover:text-law-navy font-bold uppercase tracking-widest text-xs px-6 py-3 rounded shadow transition-colors cursor-pointer"
                  >
                    View Case Precedent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter Tabs & Portfolio Cards Grid */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Case Directory
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Chambers Case Portfolio
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(cat)}
                className={`text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded transition-all duration-200 cursor-pointer ${
                  activeTab === cat 
                    ? 'bg-law-gold text-white shadow' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((c) => (
              <div 
                key={c.id} 
                className="bg-white border border-gray-200/80 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Landscape Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-law-gold text-white text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded shadow-sm z-10">
                    {c.category}
                  </span>

                  {/* Court Badge */}
                  <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-wider font-bold text-white/95 z-10 flex items-center gap-1">
                    <Scale size={10} className="text-law-gold" />
                    {c.court}
                  </span>
                </div>

                {/* Card details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif font-bold text-base text-law-navy group-hover:text-law-gold transition-colors mb-3 leading-snug">
                      {c.title}
                    </h3>
                    
                    <p className="text-gray-500 text-xs font-light leading-relaxed line-clamp-3 mb-4">
                      {c.challenge}
                    </p>

                    {/* Result Highlight */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mb-5 border-t border-gray-100 pt-3">
                      <CheckCircle size={12} className="flex-shrink-0" />
                      <span className="line-clamp-1">{c.result}</span>
                    </div>
                  </div>

                  {/* View Details CTA Button */}
                  <button 
                    onClick={() => setSelectedCase(c)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase text-law-navy hover:text-law-gold transition-colors group/link cursor-pointer w-full text-left"
                  >
                    <span>View Case Details</span>
                    <ArrowRight size={12} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline of Major Victories */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Chambers Timeline
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Chronology of Key Victories
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="relative border-l-2 border-gray-100 pl-8 ml-4 space-y-12">
            
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 bg-white border-2 border-law-gold rounded-full flex items-center justify-center font-bold text-[9px] text-law-navy shadow">
                04
              </div>
              <span className="text-law-gold font-bold text-xs uppercase block mb-1">Year 2004 – Bar Admission</span>
              <h4 className="font-serif font-bold text-base text-law-navy mb-2">Chambers Foundation</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Advocate Aarav Malhotra graduates with top honors from NLSIU Bangalore and registers with the Bar Council of Delhi, establishing Malhotra Chambers.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 bg-white border-2 border-law-gold rounded-full flex items-center justify-center font-bold text-[9px] text-law-navy shadow">
                11
              </div>
              <span className="text-law-gold font-bold text-xs uppercase block mb-1">Year 2011 – Landmark Real Estate Dispute</span>
              <h4 className="font-serif font-bold text-base text-law-navy mb-2">Metropolitan Infrastructure Judgment</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Successfully litigated a writ appeal for a consortium of 150+ landowners, establishing key compensation calculation standards under the Land Acquisition Act.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 bg-white border-2 border-law-gold rounded-full flex items-center justify-center font-bold text-[9px] text-law-navy shadow">
                17
              </div>
              <span className="text-law-gold font-bold text-xs uppercase block mb-1">Year 2017 – Financial Tribunal Success</span>
              <h4 className="font-serif font-bold text-base text-law-navy mb-2">SEBI SAT Audit Penalty Dismissed</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Represented a leading brokerage house in New Delhi, setting aside a major regulatory penalty and establishing exchange network exception rules.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 bg-white border-2 border-law-gold rounded-full flex items-center justify-center font-bold text-[9px] text-law-navy shadow">
                22
              </div>
              <span className="text-law-gold font-bold text-xs uppercase block mb-1">Year 2022 – High-Stakes Estate Partition</span>
              <h4 className="font-serif font-bold text-base text-law-navy mb-2">Connaught Place Division Settlement</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Successfully mediated a complex ancestral family estate partition involving high-value real estate assets, settling disputes within 6 months.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Performance Index
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Chambers Case Category Distribution
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="6" fill="transparent" />
                  <circle cx="48" cy="48" r="40" stroke="#b1976b" strokeWidth="6" fill="transparent" strokeDasharray="251" strokeDashoffset="50" />
                </svg>
                <span className="absolute text-sm font-bold text-law-navy">80%</span>
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-law-navy mb-1">Corporate Law</h4>
              <p className="text-[10px] text-gray-400 font-light">NCLT & securities boards disputes.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="6" fill="transparent" />
                  <circle cx="48" cy="48" r="40" stroke="#b1976b" strokeWidth="6" fill="transparent" strokeDasharray="251" strokeDashoffset="75" />
                </svg>
                <span className="absolute text-sm font-bold text-law-navy">70%</span>
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-law-navy mb-1">Property Disputes</h4>
              <p className="text-[10px] text-gray-400 font-light">Writ valuations & partition suits.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="6" fill="transparent" />
                  <circle cx="48" cy="48" r="40" stroke="#b1976b" strokeWidth="6" fill="transparent" strokeDasharray="251" strokeDashoffset="38" />
                </svg>
                <span className="absolute text-sm font-bold text-law-navy">85%</span>
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-law-navy mb-1">Arbitrations</h4>
              <p className="text-[10px] text-gray-400 font-light">Domestic & out-of-court settlements.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="6" fill="transparent" />
                  <circle cx="48" cy="48" r="40" stroke="#b1976b" strokeWidth="6" fill="transparent" strokeDasharray="251" strokeDashoffset="63" />
                </svg>
                <span className="absolute text-sm font-bold text-law-navy">75%</span>
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-law-navy mb-1">Family disputes</h4>
              <p className="text-[10px] text-gray-400 font-light">Divorces, maintenance, divisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Slider */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
            Client Endorsements
          </span>
          <h2 className="font-serif text-3xl font-bold text-law-navy mb-12">
            Case feedback & Client Reviews
          </h2>
          
          <div className="bg-law-bg-light border border-gray-200/80 rounded-xl p-8 md:p-12 shadow-sm min-h-[220px] flex flex-col justify-between relative">
            
            {/* Prev arrow */}
            <button 
              onClick={handlePrevTestimonial}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2.5 rounded-full text-law-navy hover:text-law-gold hover:shadow transition-all cursor-pointer z-10"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Quote content */}
            <div className="animate-fade-in">
              <p className="text-gray-600 font-light italic leading-relaxed text-sm md:text-base mb-6">
                "{testimonials[testimonialIdx].quote}"
              </p>
              <div>
                <h4 className="font-serif font-bold text-base text-law-navy">{testimonials[testimonialIdx].author}</h4>
                <p className="text-[10px] text-law-gold uppercase font-semibold tracking-wider mt-0.5">{testimonials[testimonialIdx].role}</p>
              </div>
            </div>

            {/* Next arrow */}
            <button 
              onClick={handleNextTestimonial}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2.5 rounded-full text-law-navy hover:text-law-gold hover:shadow transition-all cursor-pointer z-10"
            >
              <ArrowRight size={20} />
            </button>

          </div>
        </div>
      </section>

      {/* Why Clients Trust Us & Awards */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Why clients trust us */}
            <div>
              <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                Chambers Values
              </span>
              <h2 className="font-serif text-3xl font-bold text-law-navy mb-8">
                Why Clients Trust Aarav Malhotra
              </h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-law-navy">Elite Courtroom Strategy</h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed mt-0.5">We analyze precedent databases to design bulletproof litigation briefs before entering hearing trials.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-law-navy">Ethical Transparency</h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed mt-0.5">We communicate honest evaluations of litigation risks, giving you complete clarity on case options.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-law-navy">Confidential Mediation Focus</h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed mt-0.5">We prioritize out-of-court mediation contracts to settle commercial disputes while protecting family reputations.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: Awards and Recognitions */}
            <div className="bg-white border border-gray-200/80 rounded-xl p-8 shadow-sm">
              <h4 className="font-serif text-law-navy font-bold text-base mb-6 border-b border-gray-100 pb-3 uppercase">
                Chambers Awards & Recognition
              </h4>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-law-navy">Senior Counsel Designation (2021)</h5>
                    <p className="text-[11px] text-gray-400 font-light mt-0.5">Designated by the High Court of Delhi for exceptional courtroom contributions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-law-navy">Corporate Litigation Excellence Award (2024)</h5>
                    <p className="text-[11px] text-gray-400 font-light mt-0.5">Recognized for leading securities appeals SAT resolutions in corporate fields.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-law-gold/10 text-law-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-law-navy">Delhi Arbitration Leadership Award (2025)</h5>
                    <p className="text-[11px] text-gray-400 font-light mt-0.5">Awarded for mediating multi-party ancestral real estate splits in Connaught Place.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Portfolio FAQ accordion */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="text-law-gold mx-auto mb-4" size={32} />
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Portfolio Frequently Answered Questions
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-law-bg-light border border-gray-200/80 rounded-lg overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} 
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100/50 transition-colors focus:outline-none cursor-pointer"
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
                    activeFaq === idx ? 'max-h-[300px] border-t border-gray-200/60' : 'max-h-0'
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

      {/* Related Practice Areas Badges */}
      <section className="py-16 bg-gray-50 border-t border-gray-100 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h4 className="font-serif text-law-navy font-bold text-base mb-6 uppercase">
            Related Practice Areas
          </h4>
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

      {/* Consultation CTA Banner */}
      <section className="py-16 bg-[#b1976b] text-white px-4 md:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <AlertCircle size={36} className="text-white/40 mx-auto mb-4" />
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
            Need Similar Legal Assistance?
          </h3>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            If you are facing legal complications regarding corporate contracts, SARFAESI defaults, or family partition suits, let our Delhi chambers evaluate your files.
          </p>
          <Link to="/contact" className="bg-white hover:bg-law-navy text-law-navy hover:text-white font-bold uppercase tracking-widest text-xs px-8 py-3.5 rounded shadow-md transition-colors duration-300 inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Dynamic Portfolio Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4 animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative border border-gray-200 my-8">
            
            {/* Modal Header banner */}
            <div 
              className="h-48 bg-cover bg-center relative flex items-end p-6"
              style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.4), rgba(22, 34, 53, 0.9)), url(${selectedCase.image})` }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full border border-white/20 transition-colors cursor-pointer"
                title="Close Modal"
              >
                <X size={18} />
              </button>

              <div className="text-white">
                <div className="flex gap-2 mb-1.5">
                  <span className="bg-law-gold text-white text-[8px] uppercase tracking-wider font-bold px-2 py-0.5 rounded">
                    {selectedCase.category}
                  </span>
                  <span className="text-[10px] text-gray-300 font-light tracking-wide">
                    {selectedCase.court}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl md:text-2xl">{selectedCase.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
              
              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-law-gold mb-1.5">The Challenge</h4>
                <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">{selectedCase.challenge}</p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-law-gold mb-1.5">Our Strategy</h4>
                <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">{selectedCase.strategy}</p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle size={12} />
                  <span>Final Outcome</span>
                </h4>
                <p className="text-xs md:text-sm text-emerald-950 font-normal leading-relaxed">{selectedCase.victory}</p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-law-gold mb-1.5">Impact & Precedent</h4>
                <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">{selectedCase.impact}</p>
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 pt-5">
                <div>
                  <h5 className="text-[9px] uppercase font-bold text-law-navy">Related Practice Area</h5>
                  <p className="text-xs text-gray-500 font-light mt-0.5">{selectedCase.practiceArea}</p>
                </div>
                
                <Link 
                  to="/contact" 
                  onClick={() => setSelectedCase(null)}
                  className="bg-law-gold hover:bg-law-navy text-white font-bold uppercase tracking-widest text-[10px] px-5 py-3 rounded shadow transition-colors inline-block"
                >
                  Need Similar Legal Assistance?
                </Link>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
