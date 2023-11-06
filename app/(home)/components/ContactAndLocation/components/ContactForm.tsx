"use client";

import React, { useState, useEffect } from 'react'

const ContactForm = () => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<boolean>(false);
  const updateEmail = (e: any) => {
    setEmailError(() => false);
    setEmail(() => e.target.value);
  }
  const updateMessage = (e: any) => {
    setMessageError(() => false);
    setMessage(() => e.target.value);
  }
  const handleFormSubmit = () => {
    setIsFinished(true);
  }
  return (
    <>
    <section className="flex flex-col items-start justify-between gap-10 w-full h-full min-h-[350px] mb-10 md:mb-0">
      <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
        <p className={`${ emailError && "text-primary-red" }`}>Email*</p>
        <input type='text' onChange={updateEmail} value={email} placeholder='Enter your email' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium " />
      </div>
      <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
        <p className={`${ messageError && "text-primary-red" }`}>Message*</p>
        <textarea  onChange={updateMessage} value={message} placeholder='Enter your message' className="px-4 !h-[105px] !min-h-[105px] !max-h-[105px] py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
      </div>
      <button className="bg-primary-red cursor-pointer hover:bg-red-700 text-white text-sm font-semibold py-3.5 px-4 rounded-md mb-0 w-full" onClick={handleFormSubmit}>{ isFinished ? "Success" : "Submit" }</button>
    </section>
    </>
  )
}

export default ContactForm;
