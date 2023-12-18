"use client";
import { parseCookies } from 'nookies';
import React, { useState } from 'react'
import InputMask from "react-input-mask"

const CheckoutForm = () => {
  const inputStyles = `px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-600`
  const cookies = parseCookies();
  const [fullname, setFullname] = useState<string | null>(cookies.__obj1 ?? null);
  const [creditCardNumber, setCreditCardNumber] = useState<number | null | string>(null);
  const [ccv, setCcv] = useState<number | string | null>(null);
  return (
    <>
        <section className="w-full md:max-w-[60%] relative px-11 flex items-center justify-center py-14 bg-white border-[1px] rounded-md border-neutral-200 h-full">
          <div className="w-full max-w-[600px]">
              <div className="flex flex-col items-start justify-start gap-2">
                <h1 className="text-xl tracking-tight font-semibold text-neutral-800">Checkout</h1>
                <p className="text-sm opacity-50 font-medium">Fill out your information so you can purchase your order.</p>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-4 mt-8">

                <div className="flex flex-col gap-3 w-full mt-5">
                  <p className="text-md opacity-60 font-medium">Full Name</p>
                  <input className={inputStyles} value={fullname as string} onChange={(e) => setFullname(e.target.value)} placeholder='Enter full name' />
                </div>

                <div className="flex flex-col gap-3 w-full mt-5">
                  <p className="text-md opacity-60 font-medium">Credit Card Number</p>
                    <InputMask 
                    mask="9999 9999 9999 9999"
                    disabled={false}
                    maskChar=""
                    value={creditCardNumber as number}
                    onChange={(e) => setCreditCardNumber(e.target.value as string)}
                    placeholder='Enter credit card number'
                    className={inputStyles}
                    />
                </div>


                <div className="flex flex-col gap-3 w-full mt-5">
                  <p className="text-md opacity-60 font-medium">CCV Number</p>
                    <InputMask 
                    mask="999"
                    disabled={false}
                    maskChar=""
                    value={ccv as number}
                    onChange={(e) => setCcv(e.target.value as string)}
                    placeholder='Enter credit card number'
                    className={inputStyles}
                    />
                </div>

                <button className="w-full mt-6 bg-primary-red text-white/90 px-3 py-3 rounded-md cursor-pointer hover:bg-red-700 text-sm font-semibold">
                    Pay
                </button>
                <p className="text-sm font-medium opacity-40 mt-3 text-center">By confirming your payment, you allow GamedayGrill to charge this card for this purchase.</p>
              </div>
          </div>
        </section>
    </>
  )
}

export default CheckoutForm;
