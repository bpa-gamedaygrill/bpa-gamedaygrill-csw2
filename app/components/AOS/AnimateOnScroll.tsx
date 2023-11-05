"use client";
import React, { ReactNode } from 'react'
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollInterface {
  refElement: React.RefObject<HTMLElement>;
  children?: ReactNode;
  customStyling ?: string;
  duration: number;
  originalScale: number;
  once:boolean;
}

const AnimateOnScroll: React.FC<AnimateOnScrollInterface> = ({ refElement, children, customStyling, duration, originalScale, once }) => {
  const isInView = useInView(refElement, { once: once });
  
  return (
    <>
      { isInView ? <motion.div
        className={`${customStyling}`}
        initial={{ scale: originalScale, opacity: 0, filter: 'blur(3px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: duration, ease: 'easeInOut' }}
        >
        {children}
        </motion.div>
      : <>
        <div className="opacity-0">
        {children}
        </div>
      </>
      }
  </>
  )
}

export default AnimateOnScroll;
