import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar, 
  User, 
  Sparkles,
  Building2,
  ShieldCheck,
  Plus,
  Check
} from 'lucide-react';
import { BUSINESS_CONFIG, EXACT_ADDON_SERVICES, getWhatsAppLink, getTelLink } from '../config/businessData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '1 BHK Full Deep Cleaning (₹2,999)',
    location: '',
    preferredDate: '',
    message: ''
  });

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const hasFiredConversionRef = useRef(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getBasePrice = (serviceName: string): number => {
    if (serviceName.includes('1 BHK')) return 2999;
    if (serviceName.includes('2 BHK')) return 3599;
    if (serviceName.includes('3 BHK')) return 4599;
    if (serviceName.includes('4 BHK')) return 5999;
    if (serviceName.includes('5 BHK')) return 7999;
    if (serviceName.includes('Kitchen Deep Clean')) return 1499;
    if (serviceName.includes('Balcony')) return 499;
    if (serviceName.includes('Cabinet')) return 499;
    if (serviceName.includes('Bathroom')) return 499;
    if (serviceName.includes('Sofa')) return 599;
    if (serviceName.includes('Office')) return 2500;
    return 2999;
  };

  const basePrice = getBasePrice(formData.service);
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = EXACT_ADDON_SERVICES.find(a => a.id === id);
    return sum + (item ? item.priceNumeric : 0);
  }, 0);
  const totalEstimatedPrice = basePrice + addonsTotal;

  // Helper to fire Google Ads conversion event only after successful form submission
  const fireLeadConversion = () => {
    if (hasFiredConversionRef.current) return;
    hasFiredConversionRef.current = true;

    const triggerGtagConversion = () => {
      try {
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-18432091103/6P60CL26wPYCEN_HjdVE',
            'value': 1000,
            'currency': 'INR'
          });
          return true;
        } else if (typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)) {
          (window as any).dataLayer.push('event', 'conversion', {
            'send_to': 'AW-18432091103/6P60CL26wPYCEN_HjdVE',
            'value': 1000,
            'currency': 'INR'
          });
          return true;
        }
      } catch (err) {
        console.error('Google Ads conversion tracking error:', err);
      }
      return false;
    };

    const fired = triggerGtagConversion();
    if (!fired && typeof window !== 'undefined') {
      const intervalId = window.setInterval(() => {
        if (triggerGtagConversion()) {
          window.clearInterval(intervalId);
        }
      }, 300);
      window.setTimeout(() => window.clearInterval(intervalId), 3000);
    }
  };

  // Fire Google Ads conversion event only after successful form submission
  // when the website changes to the existing Thank You confirmation state
  useEffect(() => {
    if (submitted && !hasFiredConversionRef.current) {
      fireLeadConversion();
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Fast feedback transition to Thank You confirmation state
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      fireLeadConversion();
    }, 350);
  };

  const selectedAddonObjects = selectedAddons
    .map(id => EXACT_ADDON_SERVICES.find(a => a.id === id))
    .filter(Boolean);

  // Generate customized WhatsApp text from form inputs including selected add-ons and total price
  const formWhatsAppMsg = `*New Cleaning Booking / Quote Request:*
• Name: ${formData.name || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}
• Base Service: ${formData.service} (₹${basePrice.toLocaleString('en-IN')})
${selectedAddonObjects.length > 0 ? `• Selected Add-Ons:\n${selectedAddonObjects.map(a => `  - ${a!.name} (${a!.priceDisplay})`).join('\n')}\n• Add-Ons Subtotal: ₹${addonsTotal.toLocaleString('en-IN')}\n` : ''}• Total Estimated Price: ₹${totalEstimatedPrice.toLocaleString('en-IN')}
• Area / Location: ${formData.location || 'Chennai'}
• Preferred Date: ${formData.preferredDate || 'Earliest available'}
${formData.message ? `• Special Requirements: ${formData.message}` : ''}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-3 border border-gray-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0a0a0a] tracking-tight">
            Book or Request a Free Quote
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            Reach out via direct phone call, instant WhatsApp message, or submit your requirements below for rapid scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Instant Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xs space-y-6">
              <div>
                <h3 className="text-xl font-black text-[#0a0a0a]">
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  Chennai's Ultra-Luxury Residential & Commercial Facility Care
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      Service Location
                    </div>
                    <div className="text-sm font-bold text-[#0a0a0a] mt-0.5">
                      {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}
                    </div>
                    <div className="text-xs text-gray-500">
                      Doorstep service across all residential & commercial sectors
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      Direct Hotline
                    </div>
                    <a
                      href={getTelLink()}
                      id="contact-phone-link"
                      className="text-base font-black text-[#0a0a0a] hover:text-gray-600 block mt-0.5"
                    >
                      {BUSINESS_CONFIG.phoneFormatted}
                    </a>
                    <div className="text-xs text-gray-500">
                      Available daily 7:00 AM - 9:00 PM
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      WhatsApp Booking
                    </div>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-whatsapp-link"
                      className="text-base font-black text-emerald-700 hover:text-emerald-800 block mt-0.5"
                    >
                      +91 {BUSINESS_CONFIG.phoneRaw}
                    </a>
                    <div className="text-xs text-gray-500">
                      Instant estimate, photos & slot confirmation
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 text-black flex items-center justify-center shrink-0 border border-gray-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      Working Hours
                    </div>
                    <div className="text-sm font-bold text-[#0a0a0a] mt-0.5">
                      {BUSINESS_CONFIG.workingHours}
                    </div>
                    <div className="text-xs text-gray-500">
                      Open all 7 days including Sunday & public holidays
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instant-whatsapp-btn"
                  className="w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat with Us on WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Zero Advance Guarantee Pill */}
            <div className="p-4 rounded-3xl bg-gray-50 border border-gray-200 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                <strong>Zero Advance Required:</strong> We conduct a full walkthrough with you once cleaning is complete. Pay only when you are 100% satisfied.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xs">
              <h3 className="text-xl font-black text-[#0a0a0a] mb-1">
                Custom Booking / Free Quote Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Tell us your cleaning requirement and Chennai address. We respond within minutes.
              </p>

              {submitted ? (
                /* Confirmation message */
                <div id="contact-form-confirmation" className="py-8 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                    <div className="space-y-1">
                    <h4 className="text-xl font-black text-[#0a0a0a]">
                      Thank You, {formData.name || 'Valued Client'}!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Your cleaning request for <strong>{formData.service}</strong> in <strong>{formData.location || 'Chennai'}</strong> has been received. We will contact you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    {selectedAddonObjects.length > 0 && (
                      <p className="text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-200 max-w-md mx-auto">
                        <span className="font-bold block text-black mb-0.5">Selected Add-Ons Included:</span>
                        {selectedAddonObjects.map(a => `${a!.name} (${a!.priceDisplay})`).join(', ')}
                      </p>
                    )}
                    <p className="text-sm font-black text-[#0a0a0a] pt-1">
                      Estimated Total: <span className="text-emerald-700 text-lg">₹{totalEstimatedPrice.toLocaleString('en-IN')}</span> (Pay After Inspection)
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLink(formWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="confirmation-whatsapp-btn"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send Details to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        hasFiredConversionRef.current = false;
                        setFormData({
                          name: '',
                          phone: '',
                          service: 'Full Home Cleaning',
                          location: '',
                          preferredDate: '',
                          message: ''
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0a0a0a] text-xs sm:text-sm font-bold transition-all"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="cleaning-booking-form" className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-[#0a0a0a] mb-1.5 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-300 bg-white shadow-2xs text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-[#0a0a0a] mb-1.5 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 98401XXXXX"
                          className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-300 bg-white shadow-2xs text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-[#0a0a0a] mb-1.5 uppercase tracking-wider">
                        Select Service / BHK Plan *
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-2xl border border-gray-300 bg-white shadow-2xs text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black focus:border-black font-medium"
                      >
                        <option value="1 BHK Full Deep Cleaning (₹2,999)">1 BHK Full Deep Cleaning (₹2,999 - was ₹3,599)</option>
                        <option value="2 BHK Full Deep Cleaning (₹3,599)">2 BHK Full Deep Cleaning (₹3,599 - was ₹3,999)</option>
                        <option value="3 BHK Full Deep Cleaning (₹4,599)">3 BHK Full Deep Cleaning (₹4,599 - was ₹4,999)</option>
                        <option value="4 BHK Luxury Deep Cleaning (₹5,999)">4 BHK Luxury Deep Cleaning (₹5,999 - was ₹6,999)</option>
                        <option value="5 BHK Luxury Villa Cleaning (₹7,999)">5 BHK Luxury Villa Cleaning (₹7,999 - was ₹8,999)</option>
                        <option value="Office & Commercial Cleaning (₹8/sq.ft)">Office & Commercial Cleaning (₹8/sq.ft)</option>
                        <option value="Kitchen Deep Clean (₹1,499)">Kitchen Deep Clean (₹1,499)</option>
                        <option value="Balcony & Window Track Clean (₹499)">Balcony & Window Track Clean (₹499)</option>
                        <option value="Cabinet Interior Clean (₹499)">Cabinet Interior Clean (₹499)</option>
                        <option value="Bathroom Descaling (₹499)">Bathroom Descaling (₹499)</option>
                        <option value="Sofa Shampoo Clean (₹599)">Sofa Shampoo Clean (₹599)</option>
                      </select>
                    </div>

                    {/* Location / Area */}
                    <div>
                      <label htmlFor="contact-location" className="block text-xs font-bold text-[#0a0a0a] mb-1.5 uppercase tracking-wider">
                        Chennai Area / Locality *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          id="contact-location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Velachery, Anna Nagar, OMR, Adyar"
                          className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-300 bg-white shadow-2xs text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Optional Add-On Services (Exactly 3 Add-Ons) */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-[#0a0a0a] uppercase tracking-wider">
                        Optional Add-On Services
                      </label>
                      <span className="text-[11px] text-gray-500 font-medium">Click to Add / Remove</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {EXACT_ADDON_SERVICES.map(addon => {
                        const isSelected = selectedAddons.includes(addon.id);
                        return (
                          <button
                            key={addon.id}
                            type="button"
                            id={`contact-addon-${addon.id}`}
                            onClick={() => {
                              setSelectedAddons(prev => 
                                isSelected ? prev.filter(id => id !== addon.id) : [...prev, addon.id]
                              );
                            }}
                            className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-black text-white border-black shadow-2xs ring-1 ring-black'
                                : 'bg-gray-50/80 hover:bg-gray-100 text-gray-800 border-gray-200'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-1 w-full mb-1">
                              <span className="text-xs font-bold leading-snug">{addon.name}</span>
                              <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full shrink-0 ${
                                isSelected ? 'bg-amber-400 text-black' : 'bg-gray-200 text-gray-800'
                              }`}>
                                {addon.priceDisplay}
                              </span>
                            </div>
                            <span className={`text-[10px] mt-1 flex items-center gap-1 font-semibold ${
                              isSelected ? 'text-emerald-300' : 'text-gray-500'
                            }`}>
                              {isSelected ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  <span>Added to booking</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3 h-3" />
                                  <span>Add service</span>
                                </>
                              )}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Automatic Total Price Calculator Banner */}
                  <div className="bg-gray-50 border border-gray-300 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="text-center sm:text-left">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        Estimated Booking Total
                      </span>
                      <span className="text-xs text-gray-600">
                        Base: ₹{basePrice.toLocaleString('en-IN')} {selectedAddons.length > 0 ? `+ Add-ons: ₹${addonsTotal.toLocaleString('en-IN')}` : ''}
                      </span>
                    </div>
                    <div className="text-center sm:text-right">
                      <span className="text-xl sm:text-2xl font-black text-[#0a0a0a]">
                        ₹{totalEstimatedPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-emerald-700 font-bold block">
                        Zero Advance • Pay After Inspection
                      </span>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="contact-date" className="block text-xs font-bold text-[#0a0a0a] mb-1.5 uppercase tracking-wider">
                      Preferred Date (Same-day available)
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        id="contact-date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-300 bg-white shadow-2xs text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#0a0a0a] mb-1.5 uppercase tracking-wider">
                      Special Requirements / Approximate Sq.Ft
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. 5 BHK duplex villa in ECR, heavy kitchen grease, hard water stains on glass partition, commercial office 2,500 sq ft..."
                      className="w-full px-3.5 py-3 rounded-2xl border border-gray-300 bg-white shadow-2xs text-sm text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    id="submit-contact-quote-btn"
                    className="w-full py-4 px-6 rounded-full text-sm sm:text-base font-bold text-white bg-black hover:bg-gray-800 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Processing request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Submit Free Quote Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center pt-1">
                    🔒 Zero spam guarantee. Your details are used solely to schedule your service.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
