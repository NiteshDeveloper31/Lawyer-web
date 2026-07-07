import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const overviewLinks = [
    { name: 'Practice Specializations', path: '/practice-areas' },
    { name: 'Proven Case Studies', path: '/case-studies' },
    { name: 'Chamber Insights Blog', path: '/blog' },
    { name: 'Meet Our Associates', path: '/attorneys' },
    { name: 'Contact Chambers', path: '/contact' }
  ];

  const recentPosts = [
    { title: 'Understanding Corporate Compliance in 2026', path: '#' },
    { title: 'The Evolving Landscape of Mergers & Acquisitions', path: '#' },
    { title: 'Protecting Intellectual Assets Globally', path: '#' },
    { title: 'Key Financial Regulations You Must Monitor', path: '#' }
  ];

  return (
    <footer className="bg-law-navy text-gray-400 mt-24 pt-16 border-t-2 border-law-gold">
      
      {/* Footer Top Directory */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* Column 1: About Us */}
        <div className="lg:col-span-3">
          <div className="flex flex-col items-start mb-5">
            <span className="font-serif tracking-widest text-law-gold font-bold text-xl uppercase">
              Vanguard
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-semibold -mt-1">
              Legal Partners
            </span>
          </div>
          <p className="text-xs md:text-sm font-light leading-relaxed mb-6 text-gray-400">
            Providing high-caliber counsel and relentless advocacy. We stand as a cornerstone for corporations 
            and individuals seeking to resolve intricate disputes with prestige and speed.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-law-gold hover:border-law-gold/40 transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-law-gold hover:border-law-gold/40 transition-colors" aria-label="Twitter">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-law-gold hover:border-law-gold/40 transition-colors" aria-label="LinkedIn">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-law-gold hover:border-law-gold/40 transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.796.056 1.03.047 1.882.252 2.51.574a4.916 4.916 0 011.67 1.67c.322.63.527 1.48.574 2.51.047 1.012.056 1.366.056 3.796s-.01 2.784-.056 3.796c-.047 1.03-.252 1.882-.574 2.51a4.916 4.916 0 01-1.67 1.67c-.63.322-1.48.527-2.51.574-1.012.047-1.366.056-3.796.056s-2.784-.01-3.796-.056c-1.03-.047-1.882-.252-2.51-.574a4.916 4.916 0 01-1.67-1.67c-.322-.63-.527-1.48-.574-2.51-.047-1.012-.056-1.366-.056-3.796s.01-2.784.056-3.796c.047-1.03.252-1.882.574-2.51a4.916 4.916 0 011.67-1.67c.63-.322 1.48-.527 2.51-.574 1.012-.047 1.366-.056 3.796-.056zm-6.14 8.243c.041-.854.224-1.436.435-1.996a3.261 3.261 0 011.084-1.084c.56-.211 1.142-.394 1.996-.435.858-.041 1.144-.049 3.61-.049s2.752.008 3.61.049c.854.041 1.436.224 1.996.435.485.183.9.435 1.084 1.084.211.56.394 1.142.435 1.996.041.858.049 1.144.049 3.61s-.008 2.752-.049 3.61c-.041.854-.224 1.436-.435 1.996a3.261 3.261 0 01-1.084 1.084c-.56.211-1.142.394-1.996.435-.858.041-1.144.049-3.61.049s-2.752-.008-3.61-.049c-.854-.041-1.436-.224-1.996-.435a3.261 3.261 0 01-1.084-1.084c-.211-.56-.394-1.142-.435-1.996-.041-.858-.049-1.144-.049-3.61s.008-2.752.049-3.61zm6.14.757a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.833a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm5.833-5.833a.875.875 0 11-1.75 0 .875.875 0 011.75 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Recent News */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-white font-semibold tracking-wider text-base uppercase mb-5 border-b border-gray-800 pb-2">
            Recent Insights
          </h4>
          <ul className="space-y-3.5">
            {recentPosts.map((post, idx) => (
              <li key={idx}>
                <a href={post.path} className="text-xs md:text-sm hover:text-law-gold transition-colors font-light flex items-start gap-2 group">
                  <ArrowRight size={12} className="text-law-gold mt-1 flex-shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                  <span>{post.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-white font-semibold tracking-wider text-base uppercase mb-5 border-b border-gray-800 pb-2">
            Office Contacts
          </h4>
          <ul className="space-y-4 text-xs md:text-sm font-light">
            <li className="flex gap-3">
              <MapPin size={16} className="text-law-gold flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">
                Connaught Place, <br />
                New Delhi, 110001, India
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-law-gold flex-shrink-0" />
              <a href="tel:+918756975675" className="hover:text-law-gold transition-colors">
                +91 87569 75675
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-law-gold flex-shrink-0" />
              <a href="mailto:counsel@aaravmalhotra.in" className="hover:text-law-gold transition-colors break-all">
                counsel@aaravmalhotra.in
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-white font-semibold tracking-wider text-base uppercase mb-5 border-b border-gray-800 pb-2">
            Firm Directory
          </h4>
          <ul className="space-y-3.5 text-xs md:text-sm font-light">
            {overviewLinks.map((link, idx) => (
              <li key={idx}>
                {link.path.startsWith('/') ? (
                  <Link to={link.path} className="hover:text-law-gold transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-law-gold/60 group-hover:bg-law-gold transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                ) : (
                  <a href={link.path} className="hover:text-law-gold transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-law-gold/60 group-hover:bg-law-gold transition-colors" />
                    <span>{link.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="bg-[#070c14] py-6 border-t border-gray-900 text-xs px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-gray-500 font-light">
            &copy; {currentYear} Vanguard Legal Partners. All Rights Reserved.
          </div>
          <div className="text-gray-500 font-light flex items-center gap-2">
            <span>Powered by React &amp; Tailwind v4</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
