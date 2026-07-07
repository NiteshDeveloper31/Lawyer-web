import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, FileText, CheckCircle, Scale, ShieldAlert } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

const practiceDetails = {
  'banking': {
    title: 'Banking & Financial Litigations',
    subtitle: 'Asset Protection & Debt Recovery Claims',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    desc: 'Advocate Aarav Malhotra provides high-caliber advisory and trial representation for debt recovery actions, lender liability disputes, banking frauds, and securitization compliance before tribunals such as DRT (Debt Recovery Tribunal) and NCLT.',
    focusPoints: [
      'Representing clients under the SARFAESI Act and recovery actions.',
      'Securing corporate and private accounts against banking frauds.',
      'Lender liability defenses and loan restructuring agreements.',
      'Representations before Appellate Tribunals and SEBI hearings.'
    ]
  },
  'car-accident': {
    title: 'Car Accident Claims',
    subtitle: 'Motor Accident Compensation Disputes',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    desc: 'Navigating motor accident claims before the Motor Accident Claims Tribunal (MACT) demands deep understanding of insurance liabilities, medical indemnity, and negligence case law. We represent victims to secure comprehensive damages.',
    focusPoints: [
      'Filing claims before the Motor Accident Claims Tribunals.',
      'Negotiating insurance settlements for permanent disabilities.',
      'Determining third-party liabilities and criminal negligence defenses.',
      'Appealing compensation judgments before high courts.'
    ]
  },
  'personal-injury': {
    title: 'Personal Injury & Claims',
    subtitle: 'Medical Negligence & Workplace Accidents',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    desc: 'When occupational hazards or medical malpractices cause severe injuries, we advocate to hold negligent parties responsible, securing compensation for medical costs, loss of livelihood, and psychological trauma.',
    focusPoints: [
      'Litigating high-stakes medical negligence claims.',
      'Workplace injury claims and occupational hazard liabilities.',
      'Securing damages for chronic pain, suffering, and care costs.',
      'Mediation with insurance panels and corporate medical boards.'
    ]
  },
  'family-law': {
    title: 'Family Dispute Law',
    subtitle: 'Divorce, Custody, & Partition Suits',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    desc: 'Domestic disputes demand absolute confidentiality, sensible mediation, and firm advocacy. We represent clients in divorce suits, custody battles, maintenance, and family partition suits before Family Courts.',
    focusPoints: [
      'Mutual consent and contested divorce proceedings.',
      'Child custody negotiations and visitation rights.',
      'Partition suits for ancestral family property division.',
      'Pre-nuptial arrangements, mediation, and family counseling.'
    ]
  },
  'capital-markets': {
    title: 'Capital Markets & Compliance',
    subtitle: 'Securities Law & Regulatory Hearings',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Navigating the intricate guidelines of the Securities and Exchange Board of India (SEBI) requires sophisticated corporate counsel. We assist public entities, brokers, and private trusts in compliance and SEBI appeals.',
    focusPoints: [
      'Advising on public offerings, listings, and bond issuance.',
      'Defense in insider trading and market manipulation allegations.',
      'SEBI SAT (Securities Appellate Tribunal) representation.',
      'Structuring regulatory compliance programs for financial startups.'
    ]
  },
  'employment': {
    title: 'Employment & Labor Law',
    subtitle: 'Wrongful Dismissal & Corporate Compliance',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Maintaining transparent employment contracts and complying with modern labor standards prevents corporate liability. We counsel firms on POSH (Prevention of Sexual Harassment) acts and represent individuals in service disputes.',
    focusPoints: [
      'Drafting executive employment agreements and non-compete terms.',
      'Establishing internal POSH committees and compliance procedures.',
      'Litigating wrongful termination and wage recovery claims.',
      'Handling union negotiations and industrial dispute litigation.'
    ]
  },
  'corporate': {
    title: 'Corporate Advisory',
    subtitle: 'Contracts, Mergers & Regulatory Filings',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    desc: 'From venture funding to cross-border acquisitions, we provide comprehensive advice to corporate boards under the Companies Act, 2013, ensuring that business activities are backed by solid legal foundations.',
    focusPoints: [
      'Structuring mergers, acquisitions, and joint ventures.',
      'Drafting multi-million dollar vendor agreements and leases.',
      'Advising on FDI (Foreign Direct Investment) regulations.',
      'Corporate insolvency resolution process representation (IBC).'
    ]
  },
  'disputes': {
    title: 'Dispute Resolution',
    subtitle: 'Arbitration, Mediation, & Settlements',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Prolonged litigation drains corporate resources. We focus heavily on alternative dispute resolution (ADR), including commercial arbitration and strategic mediation, to resolve issues efficiently out of court.',
    focusPoints: [
      'Serving as counsel in domestic and international arbitrations.',
      'Drafting custom arbitration and dispute resolution clauses.',
      'Mediation and settlement negotiation of commercial defaults.',
      'Enforcement of arbitral awards before civil courts.'
    ]
  }
};

export default function PracticeDetail() {
  const { slug } = useParams();
  const detail = practiceDetails[slug];

  if (!detail) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-serif text-law-navy">Practice Area Not Found</h2>
        <p className="text-gray-500 mt-2">The selected practice specialization does not exist.</p>
        <Link to="/practice-areas" className="text-law-gold hover:underline mt-4 inline-block font-medium">
          View All Practices
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-law-bg-light animate-fade-in">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.85), rgba(22, 34, 53, 0.95)), url('${detail.image}')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Specialization Area
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            {detail.title}
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/practice-areas" className="hover:text-law-gold transition-colors">Practices</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">{detail.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-lg shadow border border-gray-100">
              <span className="text-law-gold text-xs uppercase tracking-widest font-semibold block mb-2">
                {detail.subtitle}
              </span>
              <h2 className="font-serif text-3xl font-bold text-law-navy mb-6">
                Specialized Legal Advocacy
              </h2>
              <div className="w-16 h-[2px] bg-law-gold mb-6" />
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-base md:text-lg">
                {detail.desc}
              </p>

              <h3 className="font-serif text-xl font-bold text-law-navy mb-6 border-b border-gray-100 pb-3">
                Key Specialization Aspects
              </h3>
              
              <ul className="space-y-4">
                {detail.focusPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3.5 items-start">
                    <CheckCircle className="text-law-gold mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm md:text-base font-light leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Callout box */}
              <div className="bg-law-navy text-white p-8 rounded-lg shadow-xl border-l-4 border-law-gold">
                <h4 className="font-serif text-lg font-bold mb-4 text-gray-100">
                  Secure Legal Consultation
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                  Facing a legal challenge in {detail.title}? Coordinate a confidential review session with Adv. Aarav Malhotra.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918756975675" className="flex items-center gap-3 text-xs md:text-sm hover:text-law-gold transition-colors font-medium">
                    <Phone className="text-law-gold flex-shrink-0" size={16} />
                    <span>+91 87569 75675</span>
                  </a>
                  <a href="mailto:counsel@aaravmalhotra.in" className="flex items-center gap-3 text-xs md:text-sm hover:text-law-gold transition-colors font-medium break-all">
                    <Mail className="text-law-gold flex-shrink-0" size={16} />
                    <span>counsel@aaravmalhotra.in</span>
                  </a>
                </div>
              </div>

              {/* Practice list sidebar */}
              <div className="bg-white p-8 rounded-lg shadow border border-gray-100">
                <h4 className="font-serif text-law-navy font-bold text-base mb-6 border-b border-gray-100 pb-3 uppercase">
                  Other Specialties
                </h4>
                <ul className="space-y-3 text-sm">
                  {Object.keys(practiceDetails)
                    .filter(key => key !== slug)
                    .map(key => (
                      <li key={key}>
                        <Link 
                          to={`/practice-areas/${key}`}
                          className="flex justify-between items-center text-gray-600 hover:text-law-gold font-light transition-colors py-1.5 border-b border-gray-50 hover:border-law-gold/10"
                        >
                          <span>{practiceDetails[key].title}</span>
                          <ChevronRight size={14} className="text-gray-400" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Consultation form at the bottom of the page */}
      <ConsultationForm />

    </div>
  );
}
