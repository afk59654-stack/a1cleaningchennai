import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  User, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG, CHENNAI_SERVICE_AREAS, EXACT_ADDON_SERVICES } from '../config/businessData';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    addItem,
    removeItem, 
    updateQuantity, 
    clearCart, 
    totalItems, 
    totalPrice, 
    isCartOpen, 
    closeCart 
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerArea, setCustomerArea] = useState('Velachery');
  const [cleaningDate, setCleaningDate] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isCartOpen) return null;

  // Prepare WhatsApp booking text
  const generateWhatsAppMessage = () => {
    const itemList = items
      .map((item, idx) => `${idx + 1}. *${item.title}* (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`)
      .join('\n');

    const msg = `Hello ${BUSINESS_CONFIG.name}, I want to book the following cleaning services in Chennai:

📋 *ORDER SUMMARY:*
${itemList}

💰 *Estimated Total:* ₹${totalPrice.toLocaleString('en-IN')}

👤 *CUSTOMER DETAILS:*
• Name: ${customerName.trim() || 'Not specified'}
• Phone: ${customerPhone.trim() || BUSINESS_CONFIG.phoneRaw}
• Locality: ${customerArea}, Chennai
• Preferred Date: ${cleaningDate || 'Earliest available slot'}
${specialNotes.trim() ? `• Notes: ${specialNotes.trim()}` : ''}

Please confirm technician slot and price estimate!`;

    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone.trim() || !customerName.trim()) {
      alert('Please provide your name and phone number to schedule your cleaning.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md md:max-w-lg bg-white shadow-2xl border-l border-gray-200 flex flex-col justify-between text-[#111111]">
          
          {/* Drawer Header */}
          <div className="px-5 sm:px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-20">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-[#0a0a0a] tracking-tight">
                  Cleaning Cart
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  {totalItems} {totalItems === 1 ? 'service item' : 'service items'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-gray-600 hover:text-red-700 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Clear All
                </button>
              )}
              <button
                type="button"
                onClick={closeCart}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-6">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-[#0a0a0a]">
                  Booking Request Received!
                </h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{customerName}</strong>! Our supervisor will call <strong>{customerPhone}</strong> within 15 minutes to confirm your technician team slot for <strong>{customerArea}</strong>.
                </p>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-left space-y-2 text-xs text-gray-600">
                  <div className="font-bold text-[#0a0a0a] text-sm">Booking Overview:</div>
                  <div>• Estimated Total: <strong className="text-base text-[#0a0a0a]">₹{totalPrice.toLocaleString('en-IN')}</strong></div>
                  <div>• Services: {items.map(i => `${i.title} (${i.quantity})`).join(', ')}</div>
                  <div>• Zero Advance: Pay only after inspecting our spotless results.</div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send Order Details to WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      clearCart();
                      closeCart();
                    }}
                    className="w-full py-3 px-4 rounded-full font-semibold text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#111111]">
                  Your Cart is Empty
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto">
                  Browse our BHK plans, individual room cleanings, or add-on services (Balcony, Sofa, Bathroom) and add them to your cart.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-[#0a0a0a] text-white text-xs font-bold hover:bg-gray-800 transition-colors"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center justify-between">
                    <span>Selected Services ({items.length})</span>
                    <span className="text-gray-500 font-normal">Chennai Rates</span>
                  </div>

                  {items.map((item) => (
                    <div 
                      key={item.id}
                      className="p-3.5 sm:p-4 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all space-y-2.5 shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm sm:text-base font-bold text-[#0a0a0a]">
                              {item.title}
                            </span>
                            {item.category === 'addon' && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                                Add-on
                              </span>
                            )}
                            {item.category === 'bhk' && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-200">
                                BHK Plan
                              </span>
                            )}
                            {item.category === 'room' && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                By Room
                              </span>
                            )}
                          </div>
                          
                          {/* Booking Description */}
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                            {item.bookingDescription}
                          </p>
                        </div>

                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-600 hover:text-red-700 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price and Quantity Controller */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                        <div className="flex items-baseline gap-1">
                          <span className="text-base font-black text-[#0a0a0a]">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                          {item.unit && (
                            <span className="text-gray-600 font-medium">({item.priceDisplay} {item.unit})</span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-xs px-1 text-[#0a0a0a] min-w-[16px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Add-On Services Suggestions */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0a0a0a] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-black" />
                      <span>Optional Add-On Services</span>
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium">1-Tap Add / Remove</span>
                  </div>
                  <div className="space-y-1.5">
                    {EXACT_ADDON_SERVICES.map(addon => {
                      const isInCart = items.some(i => i.id === addon.id);
                      return (
                        <div key={addon.id} className="flex items-center justify-between bg-white p-2 rounded-xl border border-gray-100 text-xs">
                          <div className="truncate pr-2">
                            <span className="font-semibold text-[#0a0a0a] block truncate text-[11px] sm:text-xs">{addon.name}</span>
                            <span className="text-[10px] text-gray-500 font-medium">{addon.priceDisplay}</span>
                          </div>
                          {isInCart ? (
                            <button
                              type="button"
                              onClick={() => removeItem(addon.id)}
                              className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-red-600 font-bold text-[10px] sm:text-[11px] shrink-0"
                            >
                              Remove
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => addItem({
                                id: addon.id,
                                title: addon.name,
                                price: addon.priceNumeric,
                                priceDisplay: addon.priceDisplay,
                                category: 'addon',
                                bookingDescription: addon.shortDescription,
                                image: addon.image
                              }, 1, false)}
                              className="px-2.5 py-1 rounded-lg bg-black hover:bg-gray-800 text-white font-bold text-[10px] sm:text-[11px] shrink-0"
                            >
                              + Add
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Booking Description Card */}
                <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-3.5 text-xs text-gray-700 space-y-1">
                  <div className="font-bold text-sky-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    <span>White-Glove Guarantee Included:</span>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    Industrial vacuuming, Diversey Taski hospital-safe chemicals, single-disc rotary tile buffing, and background-verified technicians included with every booking.
                  </p>
                </div>

                {/* Quick Booking Information Form */}
                <form id="cart-booking-form" onSubmit={handleDirectSubmit} className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Customer & Address Details
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand R."
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Locality in Chennai
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
                        <select
                          value={customerArea}
                          onChange={(e) => setCustomerArea(e.target.value)}
                          className="w-full pl-9 pr-2 py-2 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-black bg-white appearance-none"
                        >
                          {CHENNAI_SERVICE_AREAS.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
                        <input
                          type="date"
                          value={cleaningDate}
                          onChange={(e) => setCleaningDate(e.target.value)}
                          className="w-full pl-9 pr-2 py-2 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-black bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Special Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Need morning 8 AM slot, borewell hard water stains"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-black bg-white"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer / Checkout CTA */}
          {items.length > 0 && !isSubmitted && (
            <div className="p-5 sm:p-6 border-t border-gray-200 bg-gray-50/80 space-y-3 sticky bottom-0 z-20">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Estimated Total:</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-2.5 py-1 rounded-full">
                  Pay After Inspection
                </span>
              </div>

              {/* WhatsApp Checkout Button */}
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                id="cart-whatsapp-checkout"
                className="w-full py-3.5 px-4 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Book Cart on WhatsApp</span>
              </a>

              {/* Direct Booking Submit Button */}
              <button
                type="submit"
                form="cart-booking-form"
                id="cart-direct-submit"
                className="w-full py-3 px-4 rounded-full font-bold text-sm bg-[#0a0a0a] hover:bg-gray-800 text-white flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <span>Confirm Booking Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-3 pt-1">
                <span>✓ Zero Advance</span>
                <span>•</span>
                <span>✓ Same-Day Dispatch</span>
                <span>•</span>
                <span>✓ Verified Cleaners</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
