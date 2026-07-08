import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: 'Welcome to the Chambers of',
      title: 'Adv. Aarav Malhotra',
      desc: 'Senior Counsel representing clients with dedicated advocacy, deep legal research, and absolute integrity before the Supreme Court of India.',
      bg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=80',
      btnText: 'Contact Chambers',
      btnLink: '/contact',
    },
    {
      subtitle: 'Specializing In',
      title: 'Corporate & Civil Litigation',
      desc: 'Expert representation in NCLT boardroom disputes, corporate contract compliance audits, international arbitrations, and property succession disputes.',
      bg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1800&q=80',
      btnText: 'Our Specializations',
      btnLink: '/practice-areas',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-gray-950">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Background Image */}
          <img
            src={slide.bg}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-[8000ms] ease-out"
            style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)' }}
          />

          {/* Content Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center z-20 text-center px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              {/* Subtitle */}
              <span className="text-law-gold font-serif uppercase tracking-[0.25em] text-sm md:text-lg mb-3 animate-fade-in-down">
                {slide.subtitle}
              </span>
              
              {/* Divider */}
              <div className="w-16 h-[1.5px] bg-law-gold mb-6" />

              {/* Title */}
              <h1 className="font-serif text-4xl md:text-7xl font-bold text-white tracking-wider uppercase mb-6 drop-shadow-md">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-gray-300 font-light text-base md:text-xl max-w-2xl leading-relaxed mb-8">
                {slide.desc}
              </p>

              {/* CTA Button */}
              <Link
                to={slide.btnLink}
                className="btn-gold flex items-center gap-2 px-8 py-3.5 rounded text-xs font-bold uppercase transition-all duration-300"
              >
                <span>{slide.btnText}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-law-gold transition-colors bg-black/20 hover:bg-black/40 rounded-full border border-white/10 hover:border-law-gold/30 cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-law-gold transition-colors bg-black/20 hover:bg-black/40 rounded-full border border-white/10 hover:border-law-gold/30 cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[3px] rounded transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'w-8 bg-law-gold' : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
