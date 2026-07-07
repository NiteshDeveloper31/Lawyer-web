import React from 'react';
import Attorneys from '../components/Attorneys';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AttorneysPage() {
  return (
    <div className="w-full animate-fade-in">
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.8), rgba(22, 34, 53, 0.85)), url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Our Legal Team
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Attorneys</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <Attorneys />
    </div>
  );
}
