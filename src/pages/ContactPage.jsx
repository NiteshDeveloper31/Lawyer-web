import React from 'react';
import ConsultationForm from '../components/ConsultationForm';
import { Mail, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="w-full animate-fade-in">
      {/* Banner */}
      <div 
        className="bg-cover bg-center py-20 text-white relative"
        style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.8), rgba(22, 34, 53, 0.85)), url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80')` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
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

      {/* Consultation inquiry form */}
      <ConsultationForm />
    </div>
  );
}
