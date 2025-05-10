
import React from 'react';
import HeroSection from '@/components/about/HeroSection';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/about/ValuesSection';
import StatsSection from '@/components/about/StatsSection';

function AboutPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <StatsSection />
    </main>
  );
}

export default AboutPage;
