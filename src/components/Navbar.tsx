import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  MapPin, 
  Clock,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink, getTelLink } from '../config/businessData';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Pricing & Plans', href: '#pricing' },
    { label: 'Add-On Services', href: '#add-ons' },
    { label: 'Our Services', href: '#services' },
    { label: 'Equipment & Chemicals', href: '#equipment' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Trust Bar - Pure White/Gray Theme */}
      <div className="bg-white text-gray-700 text-xs py-1.5 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-[#0a0a0a] font-bold">
              <MapPin className="w-3.5 h-3.5 text-black" />
              <span>Chennai, Tamil Nadu</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-gray-600">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>{BUSINESS_CONFIG.workingHours} • Same-Day Bookings</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Advance Required • Pay Only After Full Inspection</span>
            </span>
            <a 
              href={getTelLink()} 
              id="top-bar-call-link"
              className="font-black text-[#0a0a0a] hover:text-gray-700 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-black" />
              <span>{BUSINESS_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-200 bg-white border-b border-gray-200 ${
        scrolled ? 'shadow-sm py-2.5' : 'py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#home" id="nav-brand-logo" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-amber-400 shadow-xs transition-transform group-hover:scale-105 shrink-0">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="text-sm sm:text-base lg:text-lg font-black tracking-tight text-[#0a0a0a] block leading-tight">
                {BUSINESS_CONFIG.name}
              </span>
              <span className="text-xs font-semibold text-gray-500 tracking-wide flex items-center gap-1.5">
                <span>Chennai, Tamil Nadu</span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span className="hidden sm:inline text-amber-800 font-bold uppercase tracking-wider text-[10px]">Luxury Deep Cleaning</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5 text-xs font-bold text-gray-700 uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-black transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons & Cart Trigger */}
          <div className="flex items-center gap-2.5">
            {/* Cart Trigger Button */}
            <button
              type="button"
              onClick={openCart}
              id="header-cart-button"
              className="relative p-2 sm:px-3.5 sm:py-2 rounded-full border border-gray-300 hover:border-black bg-white hover:bg-gray-50 text-[#0a0a0a] transition-all flex items-center gap-2 active:scale-95 shadow-2xs"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span className="hidden sm:inline text-xs font-bold">Cart</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] font-black flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Call button */}
            <a
              href={getTelLink()}
              id="header-call-button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#0a0a0a] bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all active:scale-95"
              title={`Call ${BUSINESS_CONFIG.name}`}
            >
              <Phone className="w-3.5 h-3.5 text-black" />
              <span>{BUSINESS_CONFIG.phoneRaw}</span>
            </a>

            {/* WhatsApp button */}
            <a
              href={getWhatsAppLink(`Hi ${BUSINESS_CONFIG.name}, I want to book cleaning services in Chennai.`)}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span className="hidden sm:inline">Book on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-2xl border border-gray-200 bg-white text-[#0a0a0a] shadow-2xs hover:bg-gray-50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-5 space-y-2 shadow-lg animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-gray-100">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-whatsapp"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold text-white bg-emerald-600 text-center shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
              <a
                href={getTelLink()}
                id="mobile-nav-call"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold text-white bg-black text-center shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phoneRaw}</span>
              </a>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="w-full py-2.5 px-4 text-center rounded-full text-xs font-bold text-white bg-black hover:bg-gray-800 flex items-center justify-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Open Cleaning Cart ({totalItems} items)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
