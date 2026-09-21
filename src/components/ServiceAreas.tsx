import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Phone, 
  MessageCircle,
  Building2,
  Compass
} from 'lucide-react';
import { CHENNAI_SERVICE_AREAS, BUSINESS_CONFIG, getWhatsAppLink, getTelLink } from '../config/businessData';

export const ServiceAreas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = CHENNAI_SERVICE_AREAS.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="service-areas" className="py-16 md:py-24 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wider mb-3 border border-gray-300 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-black" />
            <span>Complete Chennai Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0a0a0a] tracking-tight">
            Service Areas in Chennai, Tamil Nadu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            We provide doorstep residential and commercial cleaning across all major localities, IT corridors, and coastal suburbs of Chennai.
          </p>

          {/* Quick Locality Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your Chennai locality (e.g. Velachery, Anna Nagar, OMR)..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 bg-white shadow-2xs focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm text-[#0a0a0a] placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Areas Tag Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xs max-w-5xl mx-auto">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0a0a0a]">
              <Building2 className="w-4 h-4 text-black" />
              <span>Available Chennai Neighborhoods ({filteredAreas.length})</span>
            </div>
            <span className="text-xs text-gray-500 font-semibold">
              Same-day & Scheduled Slots
            </span>
          </div>

          {filteredAreas.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {filteredAreas.map((area, idx) => (
                <a
                  key={idx}
                  href={getWhatsAppLink(`Hi ${BUSINESS_CONFIG.name}, I need cleaning service in ${area}, Chennai.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-2xl bg-gray-50 hover:bg-black hover:text-white border border-gray-200 hover:border-black text-xs font-semibold text-gray-800 transition-colors group"
                  title={`Book cleaning in ${area}, Chennai`}
                >
                  <MapPin className="w-3.5 h-3.5 text-black group-hover:text-white shrink-0" />
                  <span className="truncate">{area}</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm font-bold text-[#0a0a0a]">
                Area "{searchTerm}" not listed?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                We service all regions across Greater Chennai and peripheral gated communities.
              </p>
            </div>
          )}

          {/* Prompt Banner */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs sm:text-sm font-bold text-[#0a0a0a] block">
                Do you live in any other part of Greater Chennai or Chengalpattu?
              </span>
              <span className="text-xs text-gray-500">
                Call or WhatsApp our team directly with your community name or landmark.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, please let me know if you cover my area in Chennai.`)}
                target="_blank"
                rel="noopener noreferrer"
                id="service-areas-whatsapp-btn"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Check Area on WhatsApp</span>
              </a>
              <a
                href={getTelLink()}
                id="service-areas-call-btn"
                className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0a0a0a] border border-gray-200 text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-black" />
                <span>Call {BUSINESS_CONFIG.phoneRaw}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
