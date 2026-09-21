import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppLink, getTelLink } from '../config/businessData';
import { useCart } from '../context/CartContext';

export const StickyMobileBar: React.FC = () => {
  const { openCart, totalItems } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href={getTelLink()}
          id="sticky-mobile-call-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full font-bold text-[11px] text-[#0a0a0a] bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all border border-gray-200"
        >
          <Phone className="w-4 h-4 mb-0.5 text-black" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink(`Hello ${BUSINESS_CONFIG.name}, I want to book a cleaning service in Chennai.`)}
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-mobile-whatsapp-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full font-bold text-[11px] text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all shadow-sm"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Cart Trigger Button */}
        <button
          type="button"
          onClick={openCart}
          id="sticky-mobile-cart-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-full font-bold text-[11px] text-white bg-[#0a0a0a] hover:bg-gray-800 active:scale-95 transition-all relative shadow-sm"
        >
          <ShoppingBag className="w-4 h-4 mb-0.5" />
          <span>Cart {totalItems > 0 ? `(${totalItems})` : ''}</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-black text-[9px] font-black flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};
