import React from 'react';
import { BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-law-bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded overflow-hidden">
          
          {/* Left Text Card */}
          <div className="lg:col-span-7 bg-[#b1976b] text-white p-8 md:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded border border-white/20">
                <BookOpen className="text-white" size={20} />
              </div>
              <span className="text-white uppercase tracking-[0.2em] text-xs font-semibold">
                Introduction
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-snug mb-6">
              We are a premier, full-service legal team based in New York
            </h2>
            
            <div className="w-16 h-[1.5px] bg-white/60 mb-6" />

            <p className="text-white/90 font-light leading-relaxed mb-6">
              Vanguard Legal Partners boasts over two decades of courtroom success and strategic advisory experience. 
              Having resolved more than 2,000 corporate, financial, and personal disputes, we approach each client's case 
              with meticulous attention and unwavering dedication.
            </p>
            
            <p className="text-white/80 font-light leading-relaxed">
              We maintain a 98% client satisfaction rate, validating our status as a trusted ally for both complex 
              commercial litigation and delicate private transactions.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
              alt="Law Firm Office" 
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Floating content on image */}
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
              <span className="text-law-gold text-xs uppercase tracking-widest font-semibold block mb-1">
                Inside the Firm
              </span>
              <h3 className="font-serif text-2xl font-semibold">
                Advocacy With Integrity
              </h3>
              <p className="text-gray-300 text-sm font-light mt-2">
                Providing standard-setting legal counsel.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
