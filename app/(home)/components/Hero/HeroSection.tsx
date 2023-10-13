"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Component Imports 
import MobileHero from './components/MobileHero';
import DesktopHero from './components/DesktopHero';
import MediumHero from './components/MediumHero';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ scale: 0.97, opacity: 0, filter: 'blur(3px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <section className="mt-40 lg:mt-44 px-7 relative">
        <div className="w-full mr-auto ml-auto h-full max-w-[1200px]">
          <MobileHero />
          <DesktopHero />
          <MediumHero />
        </div>
      </section>
    </motion.div>
  );
}

export default HeroSection;
