"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import OnlineReservationModal from './OnlineReservationModal'

const ReservationInfo = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const changeIsActive = (state: boolean) => {
    setIsActive(prev => state);
  }
  return (
    <>
    <section className="mt-7 flex flex-col items-start justify-start gap-3">
        <h1 className="text-lg font-medium tracking-tight">Reservation Information</h1>
        <p className="mt-2">You can book a reservation by calling GamedayGrill at <span className="font-semibold tracking-tight">(302)-123-4567</span> or filling out the <Link href="/#contact" className="font-medium text-primary-red underline">contact form.</Link></p>
        <p>Can't call in? <button className="font-medium text-primary-red underline" onClick={() => setIsActive(prev => true)}>Reserve Online.</button></p>
        <OnlineReservationModal isActive={isActive} setIsActive={changeIsActive} />
    </section>
    </>
  )
}

export default ReservationInfo
