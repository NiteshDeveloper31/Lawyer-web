import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import PracticeAreas from '../components/PracticeAreas';
import Services from '../components/Services';
import Attorneys from '../components/Attorneys';
import ConsultationForm from '../components/ConsultationForm';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSlider />
      <AboutSection />
      <Features />
      <PracticeAreas />
      <Services limit={4} />
      <Attorneys />
      <ConsultationForm />
    </div>
  );
}
