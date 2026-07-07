import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Attorneys() {
  const attorneysList = [
    {
      name: 'Jack Smith',
      role: 'Senior Founding Partner',
      specialty: 'Corporate Law & M&A',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80',
      bio: 'Over 25 years of corporate legal service, representing Fortune 500 corporations and steering major commercial mergers.'
    },
    {
      name: 'Marisa Goldberg',
      role: 'Partner Attorney',
      specialty: 'Banking & Financial Litigation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
      bio: 'Aggressive and focused representative for corporate banking boards and global financial houses.'
    },
    {
      name: 'Kevin Stiller',
      role: 'Senior Counsel',
      specialty: 'Civil Advocacy & Torts',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80',
      bio: 'A veteran litigator with a distinguished record in civil claims, commercial mediation, and federal appeals.'
    },
    {
      name: 'Eric Peterson',
      role: 'Associate Attorney',
      specialty: 'Family Law & Estates',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80',
      bio: 'Providing comprehensive counsel on wealth succession, estate planning, and sensitive family litigations.'
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
                    href={`mailto:${attorney.name.toLowerCase().replace(' ', '')}@vanguardlegal.com`}
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
