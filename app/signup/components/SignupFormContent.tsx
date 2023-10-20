import React from 'react'

// Component Imports 
import Form from './Form';

const SignupFormContent = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center max-w-[475px] mr-auto ml-auto">
        <div className="w-full flex flex-col items-start gap-1 mb-16">
          <h1 className="text-[2.1rem] font-semibold tracking-tight">Get started today</h1>
          <p className="text-[16px] font-medium text-neutral-600 tracking-tight dark:text-neutral-500">Sign up to recieve perks, discounts, cash-back, and more!</p>
        </div>
        <Form />
      </div>
    </>
  )
}

export default SignupFormContent;
