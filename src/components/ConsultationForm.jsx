import React, { useState } from 'react';
import { Send } from 'lucide-react';
import lawyerImg from '../assets/indian_lawyer_portrait.jpg';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', city: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `linear-gradient(rgba(11, 19, 31, 0.92), rgba(22, 34, 53, 0.96)), url('https://images.unsplash.com/photo-1505664194779-8bebcb95c539?auto=format&fit=crop&w=1200&q=80')` }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Form Card */}
          <div className="lg:col-span-7 bg-law-navy/80 border border-gray-800 p-8 md:p-12 rounded-lg shadow-2xl backdrop-blur-md">
            <div className="mb-8">
              <span className="text-law-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                Inquire Today
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Don't Hesitate to Ask
              </h2>
              <div className="gold-divider-left mb-4" />
              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                Legal issues can be intricate and overwhelming if ignored. Protect your rights, assets, and future. 
                Fill out the form below to coordinate a confidential consultation.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-law-gold/10 border border-law-gold/30 text-law-gold p-6 rounded text-center animate-fade-in">
                <h3 className="font-serif text-xl font-semibold mb-2">Thank You</h3>
                <p className="text-sm text-gray-300 font-light">
                  Your inquiry has been logged. One of our legal representatives will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="form-input text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-1.5">
                      City / Location
                    </label>
                    <input 
                      type="text" 
                      name="city" 
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. New York, NY"
                      className="form-input text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-1.5">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="form-input text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-1.5">
                    Details of the Matter *
                  </label>
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Briefly summarize your legal inquiry..."
                    className="form-input text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-gold flex items-center justify-center gap-2 px-8 py-3.5 rounded text-xs font-bold uppercase transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Clean Stretch Rectangle Lawyer Graphic */}
          <div className="hidden lg:flex lg:col-span-5 z-20">
            <div className="relative w-full h-full">
              {/* Luxury gold offset border */}
              <div className="absolute -inset-3 border border-law-gold/30 rounded pointer-events-none translate-x-2.5 translate-y-2.5" />
              <img 
                src={lawyerImg} 
                alt="Advocate Aarav Malhotra" 
                className="relative z-10 w-full h-full object-cover rounded shadow-2xl border border-gray-800"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
