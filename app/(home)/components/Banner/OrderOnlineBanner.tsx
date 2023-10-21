"use client";
import React, { useRef } from 'react'

// Component imports 
import OnlineOrderBannerContents from './components/OnlineOrderBannerContents';
import AnimateOnScroll from '../../../components/AOS/AnimateOnScroll';


const OrderOnlineBanner = () => {
  const ref = useRef(null);
  return (
    <>
      <section ref={ref} className="px-7 hidden sm:block mt-24 mb-20 h-fit min-h-[400px]">
          <div className="w-full text-white relative mr-auto ml-auto max-w-[1200px] h-[300px] lg:h-[400px]">
          <AnimateOnScroll
          refElement={ref}
          duration={0.3}
          originalScale={0.97}
          once={false}
          >
            <OnlineOrderBannerContents />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}

export default OrderOnlineBanner;
