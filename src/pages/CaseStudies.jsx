import React from 'react';
import { ChevronRight, CheckCircle, Award, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    title: 'Metropolitan Infrastructure Land Acquisition',
    category: 'Real Estate & Property',
    court: 'High Court of Delhi',
    result: '40% Compensation Increase Awarded',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80',
    challenge: 'A consortium of 150+ landowners faced forced government acquisition of their ancestral lands for highway expansion at severe under-market valuation rates.',
    strategy: 'Our chambers filed writ petitions challenging the state\'s valuation methodology, presenting third-party geographic surveys and recent private land sales records as evidence.',
    victory: 'The High Court ordered a complete re-valuation, securing a 40% compensation increment and establishing new guidelines for municipal land valuations in Delhi.',
    impact: 'Formed a core precedent for municipal compensation calculations under the Land Acquisition Act.'
  },
  {
    title: 'Shareholder Boardroom Hostile Takeover',
    category: 'Corporate Advisory',
    court: 'National Company Law Tribunal (NCLT)',
    result: 'Emergency Injunction Issued',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
    challenge: 'The founding directors of a leading logistics corporation were threatened with a hostile board takeover through illegal share diluting allocations initiated by foreign venture partners.',
    strategy: 'Drafted and filed emergency petitions under Section 241/242 of the Companies Act regarding oppression and mismanagement, demonstrating breach of shareholder agreements.',
    victory: 'The NCLT issued an emergency injunction staying the share allocation, keeping boardroom voting rights locked and securing founder control.',
    impact: 'Protected founders\' controlling equity stake and stabilized company operations.'
  },
  {
    title: 'SEBI Algorithmic Trading Appeal',
    category: 'Capital Markets',
    court: 'Securities Appellate Tribunal (SAT)',
    result: 'INR 45M Penalty Set Aside',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=500&q=80',
    challenge: 'A prominent New Delhi brokerage house faced a severe SEBI audit penalty of INR 45 million due to alleged latency audit failures in their algorithmic trading channels.',
    strategy: 'Presented audit logs demonstrating that the latency variance was caused by external state exchange network outages rather than internal system non-compliance.',
    victory: 'SAT accepted the technical defense logs and set aside all financial penalties, clearing the brokerage house of regulatory misconduct charges.',
    impact: 'Clarified the scope of liability for brokerages regarding external exchange downtime.'
  },
  {
    title: 'Mehra Family Estate Partition Dispute',
    category: 'Family Dispute Law',
    court: 'Civil Appellate Division',
    result: 'INR 1.2 Billion Asset Split Mediated',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80',
    challenge: 'A multi-party dispute regarding the division of ancestral commercial holdings in Connaught Place threatened to tie up family assets in court for decades.',
    strategy: 'Instead of prolonged litigation, we initiated structured mediation sessions in our chambers, designing a detailed division deed that balanced real estate equity values.',
    victory: 'All family members signed the custom division deed, settling the estate partition within 6 months and avoiding public court battles.',
    impact: 'Avoided public asset locking and minimized tax liabilities through structured partitions.'
  },
  {
    title: 'POSH Guidelines Wrongful Retaliation Claim',
    category: 'Employment Law',
    court: 'Delhi Labor Commissioner Office',
    result: 'Retaliatory Claim Dismissed',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80',
    challenge: 'A multinational corporate board faced a retaliatory wrongful dismissal and defamation claim filed by a terminated executive who breached code-of-conduct terms.',
    strategy: 'Presented documented compliance records of the firm\'s internal POSH committee investigations, proving the termination was strictly code-of-conduct based.',
    victory: 'The labor panel dismissed the executive\'s claim in its entirety, vindicating the company\'s administrative actions and guidelines.',
    impact: 'Vindicated corporate compliance standing and protected brand reputation.'
  },
  {
    title: 'Corporate Debt Restructuring Foreclosure Block',
    category: 'Banking & Financial',
    court: 'Debt Recovery Appellate Tribunal (DRAT)',
    result: 'Foreclosure Stayed & 36-Month Plan Enforced',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=500&q=80',
    challenge: 'A regional manufacturing unit was hit with a bank foreclosure notice under the SARFAESI Act, threatening immediate asset auctions and job losses.',
    strategy: 'Filed appeals proving technical procedural oversights in the bank\'s auction notification, while proposing a structured repayment schedule based on active purchase orders.',
    victory: 'DRAT stayed the asset auction and approved the 36-month debt restructuring repayment plan, keeping the factory active.',
    impact: 'Protected manufacturing unit operations and secured regional employment.'
  }
];

export default function CaseStudies() {
  return (
    <div className="w-full bg-law-bg-light animate-fade-in">
      
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
            Case Studies & Trials
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Case Studies</span>
          </div>
        </div>
      </div>

      {/* Intro section */}
      <section className="pt-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
            Courtroom Victories
          </span>
          <h2 className="font-serif text-3xl font-bold text-law-navy mb-4">
            A Track Record of Precedent-Setting Rulings
          </h2>
          <div className="w-16 h-[2px] bg-law-gold mx-auto mb-6" />
          <p className="text-gray-600 font-light leading-relaxed">
            Advocate Aarav Malhotra approaches each dispute with structured research, aggressive advocacy, and meticulous planning. Below are key previous legal victories representing corporate boards, developers, and private families.
          </p>
        </div>
      </section>

      {/* Case studies list */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {cases.map((c, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/80 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Top: Image in card */}
                <div className="relative h-48 md:h-52 w-full overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 bg-law-gold text-white text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded shadow-sm z-10">
                    {c.category}
                  </span>
                </div>

                {/* Bottom: Detailed Text */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 mb-2 border-b border-gray-100 pb-2">
                      <span className="font-semibold text-law-gold">{c.court}</span>
                      <span>{c.result}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-law-navy mb-4 leading-snug">
                      {c.title}
                    </h3>

                    {/* Detailed structure of the Case Study */}
                    <div className="space-y-3.5 text-xs text-gray-600 font-light mb-6">
                      <div>
                        <strong className="text-law-navy font-semibold uppercase tracking-wider text-[9px] block mb-0.5">The Challenge</strong>
                        <p className="leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-law-navy font-semibold uppercase tracking-wider text-[9px] block mb-0.5">Our Strategy</strong>
                        <p className="leading-relaxed">{c.strategy}</p>
                      </div>
                      <div>
                        <strong className="text-law-navy font-semibold uppercase tracking-wider text-[9px] block mb-0.5">Final Outcome</strong>
                        <p className="leading-relaxed text-emerald-700 font-normal">{c.victory}</p>
                      </div>
                    </div>
                  </div>

                  {/* Impact block */}
                  <div className="bg-gray-50 p-3.5 rounded border border-gray-100/60 flex items-start gap-2">
                    <Award size={14} className="text-law-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[9px] uppercase font-bold text-law-navy">Impact & Precedent</h5>
                      <p className="text-[10px] text-gray-500 font-light leading-relaxed mt-0.5">{c.impact}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
