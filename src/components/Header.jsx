import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Attorneys', path: '/attorneys' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full z-50">
      {/* Top Utility Bar */}
      <div className="bg-white text-gray-600 py-2 border-b border-gray-200 text-xs px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="mailto:counsel@aaravmalhotra.in" className="flex items-center gap-1.5 hover:text-law-gold transition-colors">
              <Mail size={13} className="text-law-gold" />
              <span>counsel@aaravmalhotra.in</span>
            </a>
            <a href="tel:+918756975675" className="flex items-center gap-1.5 hover:text-law-gold transition-colors">
              <Phone size={13} className="text-law-gold" />
              <span>+91 87569 75675</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-law-gold transition-colors text-gray-500" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-law-gold transition-colors text-gray-500" aria-label="Twitter">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-law-gold transition-colors text-gray-500" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-law-gold transition-colors text-gray-500" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.796.056 1.03.047 1.882.252 2.51.574a4.916 4.916 0 011.67 1.67c.322.63.527 1.48.574 2.51.047 1.012.056 1.366.056 3.796s-.01 2.784-.056 3.796c-.047 1.03-.252 1.882-.574 2.51a4.916 4.916 0 01-1.67 1.67c-.63.322-1.48.527-2.51.574-1.012.047-1.366.056-3.796.056s-2.784-.01-3.796-.056c-1.03-.047-1.882-.252-2.51-.574a4.916 4.916 0 01-1.67-1.67c-.322-.63-.527-1.48-.574-2.51-.047-1.012-.056-1.366-.056-3.796s.01-2.784.056-3.796c.047-1.03.252-1.882.574-2.51a4.916 4.916 0 011.67-1.67c.63-.322 1.48-.527 2.51-.574 1.012-.047 1.366-.056 3.796-.056zm-6.14 8.243c.041-.854.224-1.436.435-1.996a3.261 3.261 0 011.084-1.084c.56-.211 1.142-.394 1.996-.435.858-.041 1.144-.049 3.61-.049s2.752.008 3.61.049c.854.041 1.436.224 1.996.435.485.183.9.435 1.084 1.084.211.56.394 1.142.435 1.996.041.858.049 1.144.049 3.61s-.008 2.752-.049 3.61c-.041.854-.224 1.436-.435 1.996a3.261 3.261 0 01-1.084 1.084c-.56.211-1.142.394-1.996.435-.858.041-1.144.049-3.61.049s-2.752-.008-3.61-.049c-.854-.041-1.436-.224-1.996-.435a3.261 3.261 0 01-1.084-1.084c-.211-.56-.394-1.142-.435-1.996-.041-.858-.049-1.144-.049-3.61s.008-2.752.049-3.61zm6.14.757a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.833a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm5.833-5.833a.875.875 0 11-1.75 0 .875.875 0 011.75 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div className={`w-full transition-all duration-300 px-4 md:px-8 bg-white border-b border-gray-100 ${
        isScrolled 
          ? 'fixed top-0 left-0 w-full shadow-md bg-white/95 backdrop-blur-md py-2.5 z-50' 
          : 'relative py-4'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start select-none">
            <span className="font-serif tracking-widest text-gray-900 font-bold text-xl md:text-2xl uppercase">
              Vanguard
            </span>
            <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-semibold -mt-1">
              Legal Partners
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`relative py-1 transition-colors hover:text-law-gold ${
                      location.pathname === link.path ? 'text-law-gold' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-law-gold rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search Trigger */}
            <div className="relative pl-6 border-l border-gray-200">
              <button 
                onClick={() => setShowSearch(!showSearch)} 
                className="text-gray-600 hover:text-law-gold transition-colors cursor-pointer"
              >
                <Search size={18} />
              </button>
              {showSearch && (
                <div className="absolute right-0 top-10 bg-white border border-gray-200 p-2 rounded shadow-2xl flex items-center gap-2 z-50 min-w-[240px]">
                  <input 
                    type="text" 
                    placeholder="Search keywords..." 
                    className="bg-gray-50 text-gray-800 text-xs px-3 py-1.5 w-full rounded focus:outline-none focus:border-law-gold border border-gray-200"
                  />
                  <button className="bg-law-gold text-white text-xs px-2.5 py-1.5 rounded font-semibold cursor-pointer">
                    Go
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-law-gold transition-colors cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center py-10 lg:hidden animate-fade-in">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-6 right-6 text-gray-700 hover:text-law-gold transition-colors cursor-pointer"
          >
            <X size={28} />
          </button>
          <ul className="flex flex-col gap-6 text-center text-xl uppercase font-serif tracking-widest text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`hover:text-law-gold transition-colors ${
                    location.pathname === link.path ? 'text-law-gold font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
