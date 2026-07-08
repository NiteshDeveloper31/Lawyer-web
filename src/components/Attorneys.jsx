import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export default function Attorneys() {
  const attorneysList = [
    {
      name: 'Adv. Aarav Malhotra',
      role: 'Senior Founding Partner',
      specialty: 'Supreme Court & Arbitrations',
      image: image1,
      bio: 'Over 22 years of trial and appellate practice, successfully protecting clients\' corporate and private assets across India.'
    },
    {
      name: 'Adv. Vikram Sen',
      role: 'Partner Attorney',
      specialty: 'Banking & Finance Disputes',
      image: image2,
      bio: 'Over 14 years of banking litigation experience. Advises leading Indian banks and corporate boards on debt recovery, SARFAESI matters, and NCLT claims.'
    },
    {
      name: 'Adv. Rohan Joshi',
      role: 'Senior Counsel',
      specialty: 'Civil & Property Disputes',
      image: image3,
      bio: 'A seasoned trial and appellate advocate with an exceptional record of resolving complex ancestral property partition suits and contract breaches in Delhi.'
    },
    {
      name: 'Adv. Ananya Nair',
      role: 'Associate Attorney',
      specialty: 'Family Law & Successions',
      image: image4,
      bio: 'Specializes in executing family succession deeds, drafting estate partitions, and managing domestic arbitration disputes with high confidentiality.'
    }
  ];

  return (
    <section className="py-24 bg-white text-gray-900 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
            Our Professionals
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Meet Our Attorneys
          </h2>
          <div className="gold-divider" />
          <p className="text-law-text-muted text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mt-4">
            A diverse, standard-setting group of counselors and advocates, dedicated to delivering superior outcomes.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneysList.map((attorney, idx) => (
            <div 
              key={idx}
              className="bg-law-bg-light border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Profile Image with zoom overlay */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={attorney.image} 
                  alt={attorney.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-law-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a 
                    href={`mailto:${attorney.name.toLowerCase().replace(' ', '').replace('adv.', '')}@aaravmalhotra.in`}
                    className="bg-law-gold text-law-navy p-3 rounded-full hover:bg-law-gold-hover hover:scale-105 transition-all duration-200"
                    title="Send Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-law-navy group-hover:text-law-gold transition-colors">
                  {attorney.name}
                </h3>
                <span className="text-xs uppercase tracking-wider text-law-gold font-semibold block mt-1">
                  {attorney.role}
                </span>
                <span className="text-[11px] text-gray-400 font-medium block mb-3">
                  {attorney.specialty}
                </span>
                <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed mb-5 border-t border-gray-200/60 pt-3">
                  {attorney.bio}
                </p>
                <Link 
                  to="/attorneys" 
                  className="flex items-center gap-1 text-xs font-bold uppercase text-law-navy hover:text-law-gold transition-colors group/link"
                >
                  <span>Read Profile</span>
                  <ArrowRight size={12} className="transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
