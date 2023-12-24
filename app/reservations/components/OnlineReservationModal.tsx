"use client";
import React from 'react'

interface OnlineReservationModalInterface {
  isActive: boolean;
  setIsActive: (state: boolean) => void;
}

const OnlineReservationModal: React.FC<OnlineReservationModalInterface> = ({ isActive, setIsActive }) => {
  return (
  <>
      { isActive && 
        <section className="fixed top-0 left-0 z-[100] pointer-events-auto w-full h-full bg-black/20 flex items-center justify-center backdrop-blur-sm px-3">
        </section>
      }
  </>
  )
}

export default OnlineReservationModal;
