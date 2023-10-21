"use client";
import React, { useState } from 'react'
import { parseCookies, setCookie } from 'nookies';

const CookieInfo = () => {
  const cookies = parseCookies()
  const [show, setShow] = useState<boolean>(true);
  if (!cookies.confirmedcookies && show) {
    return (
    <>
        <div className="w-full max-w-[350px] h-fit px-7 py-5 bg-none  rounded-md fixed bottom-0 left-0">
          <div className="border-[1px] px-4 py-5 rounded-md border-neutral-200 bg-white flex flex-col items-center justify-center gap-4">
            <p className="text-[0.7rem] text-center text-neutral-500">Game Day Grill uses cookies in order to provide you with a better and easier experience using our application. We will never track your data or sell your information.</p>
            <button className="w-full px-4 py-2 bg-primary-red rounded-md font-medium text-white/90 hover:bg-red-700 text-[0.65rem]" onClick={() => {setCookie(null, 'confirmedcookies', 'yes'); setShow(() => false); console.log("clicked")}}>I Accept</button>
          </div>
        </div>
    </>
    )
  }
}

export default CookieInfo;
