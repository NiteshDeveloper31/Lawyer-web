import React, { useState } from 'react';
import { ChevronRight, Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import disputeResolutionImg from '../assets/Dispute Resolution.jpg';

const posts = [
  {
    title: 'Navigating SEBI Compliance for FinTech Startups in India',
    date: 'June 28, 2026',
    author: 'Adv. Aarav Malhotra',
    readTime: '6 Min Read',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    desc: 'Understanding the regulatory framework of SEBI is essential for FinTech startups to avoid severe compliance audits. We dissect algorithmic trading codes, brokerage registration, and investor protection directives under SEBI laws.',
    tags: ['SEBI', 'FinTech', 'Compliance']
  },
  {
    title: 'Alternative Dispute Resolution: Choosing Arbitration Over Court Trials',
    date: 'May 14, 2026',
    author: 'Adv. Aarav Malhotra',
    readTime: '5 Min Read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    desc: 'Courtroom litigation in commercial defaults can drain corporate capital for years. We review why setting up custom arbitration clauses in vendor contracts can save corporate entities stress, reputation, and capital.',
    tags: ['Arbitration', 'ADR', 'Contracts']
  },
  {
    title: 'Understanding Property Partition Suits Under Hindu Succession Acts',
    date: 'April 05, 2026',
    author: 'Adv. Aarav Malhotra',
    readTime: '8 Min Read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    desc: 'Ancestral property disputes are highly common in civil litigations. We explain the legal amendments regarding coparcenary rights of daughters and the standard procedure of filing partition suits in Delhi.',
    tags: ['Property Law', 'Family Law', 'Succession']
  },
  {
    title: 'Essential Terms to Review in Commercial Contract Drafting',
    date: 'March 18, 2026',
    author: 'Adv. Aarav Malhotra',
    readTime: '7 Min Read',
    image: disputeResolutionImg,
    desc: 'Indemnity clauses, limitation of liability, and force majeure terms dictate contract security. We outline vital checkpoints that corporate compliance officers must analyze before signing vendor contracts.',
    tags: ['Contract Law', 'Corporate Advisory', 'Liability']
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full bg-law-bg-light animate-fade-in">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.85), rgba(22, 34, 53, 0.95)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Insights & Legal Notes
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Blog Full With Right Sidebar
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Blog</span>
          </div>
        </div>
      </div>

      {/* Main Blog section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Blog posts list (8 Columns) */}
            <div className="lg:col-span-8 space-y-12 animate-slide-up">
              {posts.map((post, idx) => (
                <article 
                  key={idx} 
                  className="bg-white border border-gray-200/80 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Large Card Image */}
                  <div className="h-64 md:h-96 w-full overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-law-gold text-white text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded shadow">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Metadata block */}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-light mb-4 border-b border-gray-100 pb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-law-gold" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User size={13} className="text-law-gold" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-law-gold" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif font-bold text-2xl text-law-navy mb-4 hover:text-law-gold transition-colors leading-snug">
                      <a href="#">{post.title}</a>
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-6">
                      {post.desc}
                    </p>

                    <a href="#" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-law-gold hover:text-law-navy transition-colors border-b-2 border-transparent hover:border-law-navy pb-0.5">
                      <span>Read More</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Column: Sidebar (4 Columns) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Sidebar 1: Search Widget */}
              <div className="bg-white p-8 rounded-lg shadow border border-gray-100">
                <h4 className="font-serif text-law-navy font-bold text-base mb-6 border-b border-gray-100 pb-3 uppercase">
                  Search Chambers
                </h4>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Search insights..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-law-gold"
                  />
                  <button className="bg-law-gold text-white px-4 py-2 rounded text-xs font-bold hover:bg-law-navy transition-colors cursor-pointer">
                    Search
                  </button>
                </div>
              </div>

              {/* Sidebar 2: Text Widget / About Author */}
              <div className="bg-white p-8 rounded-lg shadow border border-gray-100 text-center flex flex-col items-center">
                <h4 className="font-serif text-law-navy font-bold text-base mb-6 border-b border-gray-100 pb-3 uppercase w-full">
                  About the Author
                </h4>
                <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed mb-6">
                  Advocate Aarav Malhotra regularly reviews statutory amendments, court rulings, and commercial regulations in India. Follow his blog for regular legal alerts and compliance counsel.
                </p>
                <Link to="/about" className="bg-law-gold text-white text-xs uppercase tracking-widest px-4 py-2.5 rounded font-bold hover:bg-law-navy transition-colors">
                  Read Profile
                </Link>
              </div>

              {/* Sidebar 3: Recent Articles Widget */}
              <div className="bg-white p-8 rounded-lg shadow border border-gray-100">
                <h4 className="font-serif text-law-navy font-bold text-base mb-6 border-b border-gray-100 pb-3 uppercase">
                  Recent Articles
                </h4>
                <ul className="space-y-4">
                  {posts.map((post, idx) => (
                    <li key={idx} className="flex gap-3.5 items-center border-b border-gray-50 pb-3 last:border-b-0 last:pb-0">
                      <img 
                        src={post.image} 
                        alt="" 
                        className="w-14 h-14 object-cover rounded border border-gray-100 flex-shrink-0" 
                      />
                      <div>
                        <a href="#" className="font-serif text-xs font-bold text-law-navy hover:text-law-gold transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </a>
                        <span className="text-[10px] text-gray-400 block mt-1">{post.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sidebar 4: Categories List */}
              <div className="bg-white p-8 rounded-lg shadow border border-gray-100">
                <h4 className="font-serif text-law-navy font-bold text-base mb-6 border-b border-gray-100 pb-3 uppercase">
                  Insights Categories
                </h4>
                <ul className="space-y-3.5 text-sm">
                  <li>
                    <a href="#" className="flex justify-between items-center text-gray-600 hover:text-law-gold transition-colors font-light py-1 border-b border-gray-50">
                      <span>SEBI & Capital Markets</span>
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded font-semibold">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center text-gray-600 hover:text-law-gold transition-colors font-light py-1 border-b border-gray-50">
                      <span>Alternative Dispute Resolution</span>
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded font-semibold">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center text-gray-600 hover:text-law-gold transition-colors font-light py-1 border-b border-gray-50">
                      <span>Hindu Succession Law</span>
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded font-semibold">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between items-center text-gray-600 hover:text-law-gold transition-colors font-light py-1 border-b border-gray-50">
                      <span>Corporate Advisory & Drafting</span>
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded font-semibold">1</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sidebar 5: Tag Cloud */}
              <div className="bg-white p-8 rounded-lg shadow border border-gray-100">
                <h4 className="font-serif text-law-navy font-bold text-base mb-6 border-b border-gray-100 pb-3 uppercase">
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['SEBI', 'ADR', 'Real Estate', 'POSH', 'Contract Law', 'Succession', 'Supreme Court', 'Arbitration', 'Delhi High Court'].map((tag, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="text-[10px] uppercase font-bold tracking-wider text-gray-500 hover:text-law-gold bg-gray-50 hover:bg-gray-100 border border-gray-200/80 px-2.5 py-1.5 rounded transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
