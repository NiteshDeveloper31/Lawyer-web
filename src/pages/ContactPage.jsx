import React, { useState } from 'react';
import ConsultationForm from '../components/ConsultationForm';
import { Mail, Phone, MapPin, Clock, ChevronRight, HelpCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const guidelines = [
    {
      q: "What files and records should I prepare before consultation?",
      a: "Please prepare copies of any active court notices, contract agreements, property partition deeds, or bank communications. Writing down a brief bulleted timeline of events is highly helpful."
    },
    {
      q: "Are virtual video consultation options available?",
      a: "Yes, for corporate boards and international clients based outside New Delhi, we coordinate secure video consultations via Zoom, Google Meet, or Microsoft Teams."
    },
    {
      q: "How are consultation fees calculated and billed?",
      a: "Initial consultation charges are calculated based on a fixed per-session rate. Ongoing litigation and tribunal representations are billed under structured retainer contracts or appearance fees."
    },
    {
      q: "How does the chamber manage file confidentiality?",
      a: "Chambers of Adv. Aarav Malhotra operate under absolute client-advocate privilege. Your shared files are kept in encrypted secure databases and accessed only by lead counsels."
    }
  ];

  return (
    <div className="w-full animate-fade-in bg-law-bg-light">
      
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.8), rgba(22, 34, 53, 0.85)), url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <span className="text-law-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Contact Our Offices
          </h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-law-gold">Contact</span>
          </div>
        </div>
      </div>

      {/* Info Cards Row */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 bg-law-bg-light border border-gray-100 rounded text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-law-gold" size={20} />
              </div>
              <h4 className="font-serif text-law-navy font-semibold mb-2">Office Address</h4>
              <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                Connaught Place, <br />
                New Delhi, 110001, India
              </p>
            </div>

            <div className="p-6 bg-law-bg-light border border-gray-100 rounded text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-law-gold" size={20} />
              </div>
              <h4 className="font-serif text-law-navy font-semibold mb-2">Phone Lines</h4>
              <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                Primary: +91 87569 75675 <br />
                Direct: +91 98765 43210
              </p>
            </div>

            <div className="p-6 bg-law-bg-light border border-gray-100 rounded text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-law-gold" size={20} />
              </div>
              <h4 className="font-serif text-law-navy font-semibold mb-2">Email Address</h4>
              <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                counsel@aaravmalhotra.in <br />
                info@aaravmalhotra.in
              </p>
            </div>

            <div className="p-6 bg-law-bg-light border border-gray-100 rounded text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-gold/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-law-gold" size={20} />
              </div>
              <h4 className="font-serif text-law-navy font-semibold mb-2">Hours of Operation</h4>
              <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                Mon - Fri: 8:00 AM - 6:00 PM <br />
                Sat - Sun: By Appointment
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="text-center mb-10">
            <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
              Locate Our Office
            </span>
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Connaught Place Chamber Map
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
          </div>
          
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-2xl border border-gray-200 bg-white p-2">
            <iframe 
              title="Advocate Aarav Malhotra Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961139420803!2d77.21833407632616!3d28.629862375667232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35edf0e1a3%3A0xcc4b971e4101e403!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Consultation preparation checklist guidelines */}
      <section className="py-20 bg-white px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <HelpCircle className="text-law-gold mx-auto mb-4" size={32} />
            <h2 className="font-serif text-3xl font-bold text-law-navy">
              Consultation Visit Guidelines
            </h2>
            <div className="w-16 h-[2px] bg-law-gold mx-auto mt-4" />
            <p className="text-gray-500 text-sm font-light mt-4">
              To maximize our pre-trial assessment meetings, review the following guidelines.
            </p>
          </div>

          {/* Guidelines FAQ accordion */}
          <div className="space-y-4">
            {guidelines.map((g, idx) => (
              <div 
                key={idx} 
                className="bg-law-bg-light border border-gray-200/80 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100/50 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-serif font-bold text-sm md:text-base text-law-navy">
                    {g.q}
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp className="text-law-gold flex-shrink-0" size={18} />
                  ) : (
                    <ChevronDown className="text-law-gold flex-shrink-0" size={18} />
                  )}
                </button>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFaq === idx ? 'max-h-[300px] border-t border-gray-200/60' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm font-light text-gray-600 leading-relaxed bg-white">
                    {g.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick alert */}
          <div className="mt-8 p-5 bg-law-gold/10 border border-law-gold/30 rounded-lg flex gap-3 items-start">
            <AlertCircle className="text-law-gold flex-shrink-0 mt-0.5" size={18} />
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              <strong>Please Note:</strong> An initial document review is mandatory before trial bookings. Make sure to attach any relevant documents in the consultation form below or send them directly to counsel@aaravmalhotra.in.
            </p>
          </div>

        </div>
      </section>

      {/* Consultation inquiry form */}
      <ConsultationForm />
    </div>
  );
}
