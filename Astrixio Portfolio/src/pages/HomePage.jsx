
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import BackgroundAnimation from '@/components/BackgroundAnimation';

function HomePage() {
  return (
    <main className="flex-1 relative">
      <BackgroundAnimation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}

export default HomePage;
