/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { EquipmentSection } from './components/EquipmentSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { ServiceAreas } from './components/ServiceAreas';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#0a0a0a] selection:bg-black selection:text-white relative overflow-x-hidden font-sans">
        {/* Shopping Cart Drawer */}
        <CartDrawer />

        {/* Header / Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow relative z-10">
          {/* Hero Section */}
          <Hero />

          {/* Pricing & Services Section (5 BHK, Commercial ₹8/sq.ft, Book by Room, Add-ons) */}
          <PricingSection />

          {/* Professional Equipment & Chemicals */}
          <EquipmentSection />

          {/* Why Choose Us */}
          <WhyChooseUs />

          {/* How It Works */}
          <HowItWorks />

          {/* Chennai Service Areas */}
          <ServiceAreas />

          {/* Customer Reviews */}
          <ReviewsSection />

          {/* About Business */}
          <AboutSection />

          {/* Contact & Free Quote Form */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky Mobile Bottom Bar (Call, WhatsApp, Cart) */}
        <StickyMobileBar />
      </div>
    </CartProvider>
  );
}
