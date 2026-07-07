import React, { useState } from 'react';
import { Award, ShieldCheck, Scale, ChevronRight, CheckCircle, GraduationCap, MapPin, Landmark, BookOpen, Quote, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import lawyerImg from '../assets/indian_lawyer_portrait.jpg';

export default function About() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "In which courts do you primarily practice?",
      a: "Advocate Aarav Malhotra primarily represents clients before the Supreme Court of India, the High Court of Delhi, and statutory tribunals including the National Company Law Tribunal (NCLT), Securities Appellate Tribunal (SAT), and Debt Recovery Tribunal (DRT)."
    },
    {
      q: "What is your fee structure for initial consultation?",
      a: "Our initial consultation is detailed, involving a comprehensive case study and brief strategy planning. Fees are calculated on a retainer or fixed per-session basis, depending on the complexity and volume of pre-trial documents to be reviewed."
    },
    {
      q: "Do you offer virtual/video consultations?",
      a: "Yes, we coordinate video consultations via Zoom, Google Meet, or Microsoft Teams for international clients and corporate boards based outside New Delhi."
    },
    {
      q: "How does the chamber handle alternative dispute resolutions?",
      a: "We believe court litigation should be a secondary resort. We specialize in drafting arbitration agreements, structuring out-of-court settlements, and mediating civil/corporate disputes to save time and capital."
    }
  ];

  const milestones = [
    {
      year: "2004",
      title: "Bar Enrolment",
      desc: "Graduated from NLSIU Bangalore and enrolled with the Bar Council of Delhi. Commenced trial court training."
    },
    {
      year: "2009",
      title: "Malhotra Chambers Established",
      desc: "Founded independent chamber in New Delhi, specializing in civil contract breaches and property disputes."
    },
    {
      year: "2015",
      title: "Arbitration Expansion",
      desc: "Represented leading corporate entities in multi-million dollar domestic and international commercial arbitrations."
    },
    {
      year: "2021",
      title: "Senior Council Counsel",
      desc: "Designated as lead Senior Advocate for landmark commercial and property suits before the Supreme Court."
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      caption: "Delhi Court Chambers"
    },
    {
      url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
      caption: "Law Library & Research"
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      caption: "Arbitration Boardroom"
    },
    {
      url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
      caption: "Scales of Justice"
    }
  ];

  return (
    <div className="w-full animate-fade-in bg-law-bg-light">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-24 text-white relative animate-slide-down"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.85), rgba(22, 34, 53, 0.9)), url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Profile & Biography
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4">
            Advocate Aarav Malhotra
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">About the Advocate</span>
          </div>
        </div>
      </div>

      {/* Main Profile Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Lawyer Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                {/* Decorative background gold box */}
                <div className="absolute -inset-3 border border-law-gold/30 rounded-lg pointer-events-none translate-x-3 translate-y-3" />
                
                {/* Main image container */}
                <div className="relative z-10 bg-white p-3 rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  <img 
                    src={lawyerImg} 
                    alt="Advocate Aarav Malhotra" 
                    className="w-full h-auto object-cover rounded shadow-inner"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="font-serif font-bold text-xl text-law-navy">Adv. Aarav Malhotra</h3>
                    <p className="text-xs text-law-gold uppercase tracking-wider font-semibold mt-1">Senior Advocate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Biography */}
            <div className="lg:col-span-7">
              <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                A Legacy of Justice & Advocacy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-law-navy mb-6">
                Representing Clients with Integrity, Dedication, and Strategic Vision
              </h2>
              <div className="w-16 h-[2px] bg-law-gold mb-6" />

              <p className="text-gray-700 font-light leading-relaxed mb-5">
                Advocate Aarav Malhotra is a distinguished Senior Advocate operating primarily at the Supreme Court of India 
                and the High Court of Delhi. With over 22 years of trial experience, appellate practice, and commercial 
                negotiation, Adv. Malhotra has built a standard-setting legal reputation for navigating complex civil, 
                corporate, and family law disputes.
              </p>
              
              <p className="text-gray-700 font-light leading-relaxed mb-6">
                Equipped with deep analytical capabilities and a meticulous approach to case law pre-trial research, 
                he has successfully protected the commercial and private assets of thousands of clients across India. 
                His advocacy is characterized by an unwavering commitment to honesty, tactical litigation, and the pursuit of favorable judgments.
              </p>

              {/* Education & Membership Quick Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-gray-200/60 py-6 mb-6">
                <div className="flex gap-3">
                  <GraduationCap className="text-law-gold flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-law-navy">Education</h4>
                    <p className="text-xs text-gray-600 font-light mt-1">B.A., LL.B. (Hons.) - National Law School of India University (NLSIU), Bangalore</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Landmark className="text-law-gold flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-law-navy">Bar Council</h4>
                    <p className="text-xs text-gray-600 font-light mt-1">Enrolled with Bar Council of Delhi (Enr No. D/1045/2004)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Block Section */}
      <section className="py-16 bg-[#b1976b] text-white px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Quote className="text-white/40 mb-4" size={40} />
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed mb-6">
            "In the courtroom, meticulous preparation is the ultimate equalizer. We do not just litigate cases; we architect strategic pathways to resolution, prioritizing our clients' commercial sanity and peace of mind above all else."
          </p>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/90">— Advocate Aarav Malhotra</span>
        </div>
      </section>

      {/* Narrative Biography Expansion (More Text Section) */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-law-navy mb-6 text-center">
            Professional History & Legal Journey
          </h3>
          <div className="w-16 h-[2px] bg-law-gold mx-auto mb-8" />
          
          <div className="prose prose-gray max-w-none text-gray-700 font-light leading-relaxed space-y-6">
            <p>
              After graduating with top honors from the prestigious National Law School of India University in Bangalore, Aarav Malhotra 
              began his legal practice under the guidance of prominent legal luminaries in New Delhi. Over the first decade, he handled 
              complex arbitration and commercial trials, developing an acute acumen for property boundaries, commercial breach-of-contract 
              disputes, and corporate restructuring compliance.
            </p>
            <p>
              His landmark success in the 2011 <em>Metropolitan Infrastructure Dispute</em> established new legal precedents regarding 
              land acquisition indemnification and stakeholder liabilities. Since then, he has regularly been retained as lead counsel by 
              mid-sized corporations, private trusts, and high-profile individuals seeking structured corporate dispute resolution and protection 
              from hostile acquisitions.
            </p>
            <p>
              Adv. Malhotra also counsels families on complex assets, estate tax structuring, succession planning, and partition suits. He believes 
              that while courtroom litigation is sometimes inevitable, structured mediation and dispute prevention can often save clients 
              substantial capital, stress, and time. His custom-drafted advisory agreements and contract reviews prevent future liabilities 
              before they can arise.
            </p>
            <p>
              A frequent guest lecturer at premier national law institutes, Aarav Malhotra also authors papers on the digital transformation of 
              Indian contract law and intellectual property rights. He balances a demanding trial schedule with local community pro-bono work, 
              assisting underprivileged families in property lease and consumer rights disputes.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Milestones of Excellence
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal Line connecting milestones (Desktop only) */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1.5px] bg-gray-200 z-0" />
            
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-full border-2 border-law-gold flex items-center justify-center shadow-lg font-serif text-xl font-bold text-law-navy mb-5 hover:scale-105 transition-transform duration-300">
                  {ms.year}
                </div>
                <h4 className="font-serif font-bold text-base text-law-navy mb-2">{ms.title}</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed max-w-[200px]">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Milestones Achievements Grid */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Performance Index
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Key Achievements & Milestones
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l-4 border-law-gold pl-6 py-2">
              <h4 className="text-3xl font-bold text-law-navy font-serif">2,000+</h4>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Disputes Resolved</p>
              <p className="text-xs text-gray-500 font-light mt-1">Across corporate litigation, civil claims, and matrimonial disputes.</p>
            </div>
            
            <div className="border-l-4 border-law-gold pl-6 py-2">
              <h4 className="text-3xl font-bold text-law-navy font-serif">22+</h4>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Years Practice</p>
              <p className="text-xs text-gray-500 font-light mt-1">Dedicated representation in High Court and Supreme Court.</p>
            </div>

            <div className="border-l-4 border-law-gold pl-6 py-2">
              <h4 className="text-3xl font-bold text-law-navy font-serif">98%</h4>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Client Satisfaction</p>
              <p className="text-xs text-gray-500 font-light mt-1">Based on client retention, successful mediation, and favorable judgments.</p>
            </div>

            <div className="border-l-4 border-law-gold pl-6 py-2">
              <h4 className="text-3xl font-bold text-law-navy font-serif">15+</h4>
              <p className="text-xs uppercase tracking-widest text-law-gold font-semibold mt-1">Precedent Rulings</p>
              <p className="text-xs text-gray-500 font-light mt-1">Involved as lead counsel in significant arbitration case law.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Grid */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Visual Gallery
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Chambers & Legal Environment
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded shadow-md bg-white border border-gray-100 aspect-4/3 cursor-pointer">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-law-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs uppercase tracking-widest text-law-gold font-semibold block mb-1">Advocate Malhotra</span>
                  <h4 className="font-serif text-white text-sm font-semibold">{img.caption}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Endorsements
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Trusted by Corporate & Private Clients
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between">
              <p className="text-gray-600 text-sm font-light italic leading-relaxed mb-6">
                "Adv. Aarav Malhotra resolved our family property partition suit within 6 months. His strategy was meticulous and saved us years of stressful trial litigation. Absolute professional."
              </p>
              <div>
                <h4 className="font-bold text-sm text-law-navy">Ramesh Gupta</h4>
                <p className="text-[10px] text-law-gold uppercase font-semibold tracking-wider">Real Estate Developer</p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between">
              <p className="text-gray-600 text-sm font-light italic leading-relaxed mb-6">
                "His representation before the Securities Appellate Tribunal was masterclass. Aarav Malhotra possesses deep authority on compliance, SEBI rules, and corporate defenses."
              </p>
              <div>
                <h4 className="font-bold text-sm text-law-navy">Priya Sharma</h4>
                <p className="text-[10px] text-law-gold uppercase font-semibold tracking-wider">Chief Counsel, FinTech Corp</p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between">
              <p className="text-gray-600 text-sm font-light italic leading-relaxed mb-6">
                "Strategic, ethical, and highly detailed. Adv. Malhotra is our go-to senior advocate for all complex shareholder contract disputes and insolvency litigation cases in New Delhi."
              </p>
              <div>
                <h4 className="font-bold text-sm text-law-navy">Sunil Varma</h4>
                <p className="text-[10px] text-law-gold uppercase font-semibold tracking-wider">Managing Director, Varma Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="text-law-gold mx-auto mb-4" size={32} />
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Frequently Answered Questions
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/80 rounded-lg overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button 
                  onClick={() => toggleFaq(idx)} 
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
                
                {/* FAQ Answer panel */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFaq === idx ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm font-light text-gray-600 leading-relaxed bg-gray-50/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
