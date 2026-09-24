import React, { useState } from 'react';
import { TopContactBar } from './components/TopContactBar';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectGallery } from './components/ProjectGallery';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';
import { Toast } from './components/Toast';
import { ConsultationFormData } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<{
    title: string;
    desc: string;
  } | null>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setPreselectedService(undefined);
  };

  const handleLeadSubmitted = (data: ConsultationFormData) => {
    setToastMessage({
      title: 'Consultation Request Received',
      desc: `Thank you, ${data.fullName || 'Neighbor'}. Our Buena Park team will contact you shortly regarding your ${data.projectType}.`,
    });
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#FF914D] selection:text-black">
      {/* Top Contact Bar */}
      <TopContactBar />

      {/* Sticky Luxury Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Sections */}
      <main>
        {/* Fullscreen Cinematic Hero Slider & Floating Form */}
        <HeroSlider
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onSubmitLead={handleLeadSubmitted}
        />

        {/* Trust Statistics with Count-Up */}
        <TrustStats />

        {/* About Section & Storytelling */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Core Services Section with Detail Overlays */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider />

        {/* Featured Project Gallery with Category Tabs & Lightbox */}
        <ProjectGallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5-Step Design-Build Process */}
        <ProcessTimeline onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Why Choose Sina Design & Build */}
        <WhyChooseUs />

        {/* Verified 5-Star Testimonials (Yelp, Thumbtack, MapQuest) */}
        <TestimonialsSection />

        {/* Final Lead Capture & Consultation Section */}
        <ContactSection onSubmitLead={handleLeadSubmitted} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={preselectedService}
        onSubmit={handleLeadSubmitted}
      />

      {/* Floating Action Buttons (Mobile Call + Desktop Quote) */}
      <FloatingActions onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage.title}
          subMessage={toastMessage.desc}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
