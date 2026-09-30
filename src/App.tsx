import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { BirthdayCakeSection } from './sections/BirthdayCakeSection';
import { HusbandQuizSection } from './sections/HusbandQuizSection';
import { ConstellationSection } from './sections/ConstellationSection';
import { OurStorySection } from './sections/OurStorySection';
import { PhotoGallerySection } from './sections/PhotoGallerySection';
import { LoveLetterSection } from './sections/LoveLetterSection';
import { ReasonsToSmileSection } from './sections/ReasonsToSmileSection';
import { SurpriseGiftSection } from './sections/SurpriseGiftSection';
import { FinalCinematicSection } from './sections/FinalCinematicSection';

export const App: React.FC = () => {
  const [experienceStarted, setExperienceStarted] = useState<boolean>(true);

  const handleStartExperience = () => {
    setExperienceStarted(true);
  };

  const handleReplay = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-velvet-950 text-cream-100 selection:bg-romantic-500/30 selection:text-white overflow-x-hidden">
      {/* Floating ambient particles and stars */}
      <ParticleBackground />

      {/* Floating Quick Navbar */}
      <Navbar />

      {/* Floating Music Controller */}
      <FloatingMusicPlayer />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Opening Screen */}
        <HeroSection onStartExperience={handleStartExperience} />

        {/* 2. Interactive Birthday Cake */}
        <BirthdayCakeSection />

        {/* 3. Mini Game: How Well Do You Know Your Husband? */}
        <HusbandQuizSection />

        {/* 4. Things I Love About You (Constellation) */}
        <ConstellationSection />

        {/* 5. Our Story (Timeline) */}
        <OurStorySection />

        {/* 6. Photo Gallery (Memory Wall) */}
        <PhotoGallerySection />

        {/* 7. Love Letter (Animated Envelope) */}
        <LoveLetterSection />

        {/* 8. 20 Reasons to Smile */}
        <ReasonsToSmileSection />

        {/* 9. Surprise Gift Box */}
        <SurpriseGiftSection />

        {/* 10. Final Cinematic Screen & Easter Egg */}
        <FinalCinematicSection onReplay={handleReplay} />
      </main>
    </div>
  );
};

export default App;
