import React from 'react';

// Component Imports 
import MobileHero from './components/MobileHero';
import DesktopHero from './components/DesktopHero';
import MediumHero from './components/MediumHero';

const HeroSection = () => {
  return (
    <>
      <section className="mt-40 lg:mt-44 px-7 relative">
        <div className="w-full mr-auto ml-auto h-full max-w-[1200px]">
          <MobileHero />
          <DesktopHero />
          <MediumHero />
        </div>
      </section>
    </>
  )
}

export default HeroSection;
