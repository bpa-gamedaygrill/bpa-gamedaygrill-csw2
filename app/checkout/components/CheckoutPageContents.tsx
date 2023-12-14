"use client";
import React, { useState } from 'react'

// component imports
import CartPreview from './CartPreview';
import CheckoutForm from './CheckoutForm';

const CheckoutPageContents = () => {
  return (
    <>
      <main className="h-[100vh] max-h-[100vh] px-7 relative">
        <div className="w-full flex-col md:flex-row mr-auto py-5 ml-auto h-full max-w-[1500px] flex items-center justify-center gap-3">
          <CheckoutForm />
          <CartPreview />
        </div>
      </main>
    </>
  )
}

export default CheckoutPageContents;
