import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PracticeAreas() {
  const practices = [
    {
      title: 'Banking & Financial',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/banking'
    },
    {
      title: 'Car Accident Claims',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/car-accident'
    },
    {
      title: 'Personal Injury',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/personal-injury'
    },
    {
      title: 'Family Dispute Law',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/family-law'
    },
    {
      title: 'Capital Markets',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/capital-markets'
    },
    {
      title: 'Employment Law',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/employment'
    },
    {
      title: 'Corporate Advisory',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/corporate'
    },
    {
      title: 'Dispute Resolution',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&h=300&q=80',
      link: '/practice-areas/disputes'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-900 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Stunning Phone Callout Banner */}
        <div className="bg-[#b1976b] text-white p-8 md:p-10 rounded-lg shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-white/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Are you facing legal complications but unsure where to turn?
              </h3>
              <p className="text-white/80 text-xs md:text-sm mt-0.5">
                Talk to us directly. We are committed to finding you a path forward.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="text-xs uppercase tracking-widest text-white/80 block font-semibold mb-1">
              Call For Consultation
            </span>
            <a href="tel:+918756975675" className="text-xl md:text-2xl font-bold font-serif hover:text-white/80 transition-colors block text-white">
              +91 87569 75675
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-b border-gray-200 pb-6">
          <div className="text-center md:text-left">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Legal Practice Areas
            </h2>
          </div>
          <Link to="/practice-areas" className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-law-gold font-bold hover:text-law-gold-hover transition-colors group">
            <span>View All Practices</span>
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Practices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((practice, idx) => (
            <Link 
              key={idx}
              to={practice.link}
              className="relative aspect-4/3 rounded overflow-hidden shadow-md group block hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10 group-hover:from-law-navy/90 group-hover:via-law-navy/40 transition-all duration-300" />
              
              {/* Image */}
              <img 
                src={practice.image} 
                alt={practice.title}
                className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gold Border Highlight on Hover */}
              <div className="absolute inset-4 border border-law-gold/0 group-hover:border-law-gold/30 rounded z-20 pointer-events-none transition-all duration-500" />

              {/* Text Layer */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="font-serif text-white font-semibold text-lg md:text-xl group-hover:text-law-gold transition-colors">
                  {practice.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
