import React from 'react';
import { Car, Users, Landmark, ShieldCheck, Heart, Home } from 'lucide-react';
import lawyerImg from '../assets/indian_lawyer_portrait.jpg';

export default function Features() {
  const pillars = [
    {
      icon: <Car className="text-law-gold" size={24} />,
      title: 'Civil Disputes & Liability',
      desc: 'Expert negotiation and representation for disputes regarding contracts, negligence, and liability claims.',
    },
    {
      icon: <Users className="text-law-gold" size={24} />,
      title: 'Family & Matrimonial Law',
      desc: 'Sensitive, compassionate mediation and litigation for divorces, custody agreements, and family estates.',
    },
    {
      icon: <Landmark className="text-law-gold" size={24} />,
      title: 'Banking & Finance Litigations',
      desc: 'Sophisticated advisory and advocacy services for complex banking, lending, and investment disputes.',
    },
    {
      icon: <ShieldCheck className="text-law-gold" size={24} />,
      title: 'Corporate Defense & Compliance',
      desc: 'Guarding businesses against regulatory investigations, breaches of contract, and employment disputes.',
    },
    {
      icon: <Heart className="text-law-gold" size={24} />,
      title: 'Personal Injury & Claims',
      desc: 'Vigorous pursuit of compensation for medical malpractice, vehicular accidents, and occupational injuries.',
    },
    {
      icon: <Home className="text-law-gold" size={24} />,
      title: 'Real Estate & Property Law',
      desc: 'Handling transactions, zoning regulations, commercial leases, and tenant-landlord litigation.',
    },
  ];

  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.95), rgba(22, 34, 53, 0.98)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80')` }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Centered Top Lawyer Image & Header */}
        <div className="flex flex-col items-center text-center mb-16 z-20 relative">
          <div className="relative w-56 h-56 mb-6">
            {/* Gold border backdrop */}
            <div className="absolute inset-0 rounded-full border border-law-gold/30 translate-x-1.5 translate-y-1.5 pointer-events-none" />
            <img 
              src={lawyerImg} 
              alt="Advocate Aarav Malhotra" 
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-law-gold shadow-2xl"
            />
          </div>
          <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Core Legal Pillars of Our Practice
          </h2>
          <div className="gold-divider" />
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="flex gap-4 p-6 bg-law-navy/40 border border-gray-800 rounded hover:border-law-gold/30 hover:bg-law-navy/60 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-law-gold/10 rounded flex items-center justify-center border border-law-gold/20 group-hover:bg-law-gold/25 transition-colors">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-gray-100 group-hover:text-law-gold transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
