import React from 'react';
import { Scale, Users, Shield, Landmark, Home, Briefcase, FileText, ShoppingBag, Globe2, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    title: 'Legal Consultation',
    desc: 'Structured pre-trial advisory sessions, document audits, and legal feasibility research before litigation begins.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Family Law',
    desc: 'Comprehensive protection regarding family trust divisions, ancestral asset splits, and legal partitions under succession acts.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Criminal Defense',
    desc: 'Aggressive representation and bail petitions before high courts regarding complex white-collar crime charges.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Civil Litigation',
    desc: 'Strategic courtroom advocacy before high courts for contractual breaches, property rights, and money recovery trials.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Property Disputes',
    desc: 'Representing builders, tenants, and families in lease breaches, municipal acquisition valuations, and partition claims.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Corporate Law',
    desc: 'Advising board members on shareholder agreements, regulatory filings, hostile takeover defense, and NCLT disputes.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Divorce & Child Custody',
    desc: 'Sensitive counsel for matrimonial disputes, mutual divorce petitions, child maintenance, and alimony mediation.',
    icon: Scale,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Documentation & Agreements',
    desc: 'Meticulous drafting of vendor agreements, non-compete deeds, joint venture terms, and power of attorney documents.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Consumer Protection',
    desc: 'Representing clients before district consumer forums for manufacturing defaults, service negligence, and retail fraud.',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=300&q=80'
  },
  {
    title: 'Immigration Law',
    desc: 'Assisting corporate executives and international clients with visa compliance audits and cross-border workspace permits.',
    icon: Globe2,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&h=300&q=80'
  }
];

export default function Services({ limit }) {
  const displayedServices = limit ? servicesList.slice(0, limit) : servicesList;

  return (
    <section className="py-24 bg-white text-gray-900 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
            Chambers Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Services
          </h2>
          <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mt-4">
            Tailored legal representations and document drafts built on extensive case law research and strategic trial planning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={idx}
                className="bg-law-bg-light border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="h-40 w-full overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 bg-law-gold text-white rounded-full flex items-center justify-center border border-white/20 shadow-md">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-lg text-law-navy group-hover:text-law-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-light leading-relaxed mt-3">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Link Button */}
                <div className="p-6 pt-0">
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-1.5 text-xs font-bold uppercase text-law-navy hover:text-law-gold transition-colors group/link"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight size={12} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Services Call-to-Action (For home page limitation) */}
        {limit && (
          <div className="text-center mt-16">
            <Link 
              to="/services" 
              className="bg-law-navy hover:bg-law-gold text-white hover:text-law-navy font-bold uppercase tracking-widest text-xs px-8 py-4 rounded shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>View All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
