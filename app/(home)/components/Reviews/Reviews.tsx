"use client";
import React, { useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Component Imports 
import ReviewContents from './components/ReviewContents';
import AnimateOnScroll from '../../../components/AOS/AnimateOnScroll';

const Reviews = () => {
  const ref = useRef(null);
  return (
      <>
        <section ref={ref} className="px-7 !mt-0 mb-20 h-fit">
          <div className="w-full relative mr-auto ml-auto max-w-[1200px]">
          <AnimateOnScroll
          refElement={ref}
          duration={0.3}
          originalScale={0.97}
          once={false}
          >
            <ReviewContents />
          </AnimateOnScroll>
        </div>
      </section>
      </>
  )
}

export default Reviews;
