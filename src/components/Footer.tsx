import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ArrowUp,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink, getTelLink } from '../config/businessData';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { openCart, totalItems } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-700 pt-16 pb-24 md:pb-12 border-t border-gray-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-200">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-amber-400 font-bold shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black text-[#0a0a0a] block leading-tight">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-xs text-gray-500 font-bold">
                  Chennai, Tamil Nadu • Luxury White-Glove Deep Cleaning
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Premium home and commercial cleaning services in Chennai, combining trained professionals, quality equipment, and very affordable prices across Chennai.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Advance Payment • Pay Only After 100% Inspection</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0a0a0a]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-medium">
              <li>
                <a href="#home" className="hover:text-black transition-colors">Home</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-black transition-colors">BHK Pricing Plans</a>
              </li>
              <li>
                <a href="#commercial-office-card" className="hover:text-black transition-colors">Commercial @ ₹6/sq.ft</a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">Book by Room</a>
              </li>
              <li>
                <a href="#add-ons" className="hover:text-black transition-colors">Add-on Services</a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-black transition-colors">Machinery & Chemicals</a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-black transition-colors">Chennai Localities</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-black transition-colors">Customer Reviews</a>
              </li>
            </ul>
          </div>

          {/* Popular Add-ons & Rates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0a0a0a]">
              Popular Add-ons & Rates
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Kitchen Chimney Deep Clean</span>
                <strong className="text-black">₹499</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Fridge Interior Deep Clean</span>
                <strong className="text-black">₹399</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Kitchen Cabinet Interior</span>
                <strong className="text-black">₹499</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Bathroom Descaling</span>
                <strong className="text-black">Starting ₹499</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Balcony Deep Clean</span>
                <strong className="text-black">Starting ₹499</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>AC Cleaning</span>
                <strong className="text-black">Starting ₹599</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Mattress Sanitization</span>
                <strong className="text-black">Starting ₹599</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Sofa Cleaning (5-Seater)</span>
                <strong className="text-black">Starting ₹699</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Commercial / Office</span>
                <strong className="text-black">Starting ₹6 / sq.ft</strong>
              </li>
              <li className="pt-1">
                <button
                  type="button"
                  onClick={openCart}
                  className="text-xs font-bold text-black flex items-center gap-1.5 hover:underline"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Open Cleaning Cart ({totalItems} items)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#0a0a0a]">
              Contact & Direct Booking
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <a href={getTelLink()} className="hover:text-black font-bold text-[#0a0a0a]">
                  {BUSINESS_CONFIG.phoneFormatted}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-bold"
                >
                  WhatsApp: +91 {BUSINESS_CONFIG.phoneRaw}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.workingHours} (Same-Day)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, I would like to book a service in Chennai.`)}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. Chennai, Tamil Nadu. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-500 font-medium">
              Ultra-Luxury Residential & Commercial Facility Care
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="py-1.5 px-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-2xs transition-all flex items-center gap-1 cursor-pointer active:scale-95"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-black" />
              <span className="text-[11px] font-bold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
