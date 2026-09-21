import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Building2,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink, getTelLink } from '../config/businessData';
import { useCart } from '../context/CartContext';

const HERO_TEAM_SCRUBBING_IMG = '/images/team-floor-scrubbing.jpg';

export const Hero: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'scrubbing' | 'vacuum'>('scrubbing');
  const { openCart, totalItems } = useCart();

  const photos = {
    scrubbing: {
      src: HERO_TEAM_SCRUBBING_IMG,
      alt: "A1 Professional Home Cleaning Service team in blue uniforms scrubbing marble floor with single-disc rotary machine in Chennai",
      label: "Rotary Floor Scrubbing",
      subtitle: "High-RPM Single-Disc Floor Buffing"
    },
    vacuum: {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
      alt: "Cleaning technician with industrial high-suction vacuum machine in Chennai",
      label: "Deep Vacuum Extraction",
      subtitle: "1400W Wet & Dry Deep Sanitization"
    }
  };

  const currentPhoto = photos[activePhoto];

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-6 pb-16 lg:py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Centered Chennai Location & Trust Pill */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-300 shadow-2xs text-xs sm:text-sm font-bold text-[#0a0a0a]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <MapPin className="w-4 h-4 text-black shrink-0" />
            <span>Chennai, Tamil Nadu • Professional & Reliable Cleaning Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#0a0a0a] tracking-tight leading-[1.12]">
              A1 Full Home Cleaning Services In Chennai
            </h1>

            {/* Subheadline / Main Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Premium home and commercial cleaning services in Chennai, combining trained professionals, quality equipment, and very affordable prices across Chennai.
            </p>

            {/* Key Value Points for Chennai Homeowners */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 pb-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a]">1 to 5 BHK Packages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a]">1 BHK Starting ₹2,999 (was ₹3,599)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a]">Trusted Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a]">Taski Certified Chemicals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a]">Rotary Floor Buffing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0a0a0a]">Zero Advance Required</span>
              </div>
            </div>

            {/* Action Buttons: WhatsApp, Call, and Cart */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, I am looking for deep cleaning in Chennai. Please share availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-book-whatsapp-btn"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
              </a>

              {/* Call Now Button */}
              <a
                href={getTelLink()}
                id="hero-call-now-btn"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white bg-[#0a0a0a] hover:bg-gray-800 shadow-md transition-all active:scale-95 text-center"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>Call {BUSINESS_CONFIG.phoneRaw}</span>
              </a>

              {/* View Pricing & Cart Button */}
              <a
                href="#pricing"
                id="hero-pricing-btn"
                className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-[#0a0a0a] bg-white hover:bg-gray-100 border border-gray-300 transition-all active:scale-95 shadow-2xs text-center"
              >
                <span>View Plans & Add to Cart</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Assurance Badge */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1.5 font-medium text-gray-800">
                <Clock className="w-4 h-4 text-black" />
                <span>7 AM - 9 PM Daily (Same-Day Slots)</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline"></span>
              <span className="flex items-center gap-1.5 font-bold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Pay Only After Inspection</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline"></span>
              <span className="flex items-center gap-1.5 font-medium text-gray-800">
                <Building2 className="w-4 h-4 text-black" />
                <span>Home & Commercial Cleaning</span>
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Cleaning Team Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-300 bg-white group">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none"></div>

                {/* Live Work Proof Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 bg-black/85 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Verified Field Crew</span>
                  </div>
                </div>

                {/* Photo Switcher Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center bg-black/85 backdrop-blur-md p-1 rounded-2xl border border-white/20">
                  <button
                    type="button"
                    onClick={() => setActivePhoto('scrubbing')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      activePhoto === 'scrubbing'
                        ? 'bg-white text-black shadow-xs'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Floor Machine
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhoto('vacuum')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      activePhoto === 'vacuum'
                        ? 'bg-white text-black shadow-xs'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    High-Power Vacuum
                  </button>
                </div>

                {/* Overlay Highlights */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                      Uniformed Cleaners
                    </span>
                    <span className="bg-black text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-white/30">
                      {currentPhoto.label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-200 drop-shadow-sm">
                    {currentPhoto.subtitle} with certified Diversey Taski cleaners & safe chemicals.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: 1 BHK Starting Price */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white p-3 sm:p-3.5 rounded-2xl shadow-md border border-gray-200 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold shrink-0 border border-emerald-200">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">1 BHK Deep Cleaning</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-gray-400 line-through font-semibold">₹3,599</span>
                    <span className="text-sm font-black text-[#0a0a0a]">Starting ₹2,999</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Equipment & Safety */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-3 rounded-2xl shadow-md border border-gray-200 flex items-center gap-2.5 z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-[#0a0a0a]">Spotless Handover</div>
                  <div className="text-[10px] text-gray-500">100% Inspection Guarantee</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
