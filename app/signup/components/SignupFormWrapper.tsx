"use client";
import React, { useRef } from 'react'

// Component Imports 
import AnimateOnScroll from '../../components/AOS/AnimateOnScroll';
import SignupFormContent from './SignupFormContent';

const SignupFormWrapper = () => {
  const ref = useRef(null);
  return (
  <>
      <h1>HELLO</h1>
      <section ref={ref} className="mt-44 w-full px-7">
        <div className="max-w-[1200px] relative mr-auto ml-auto">
          <AnimateOnScroll
          refElement={ref}
          duration={0.2}
          once
          originalScale={0.97}
          >
            <SignupFormContent />
          </AnimateOnScroll>
        </div>
      </section>
  </>
  )
}

export default SignupFormWrapper;
