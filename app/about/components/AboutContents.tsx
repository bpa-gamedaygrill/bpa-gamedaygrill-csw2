import React from 'react'
import Image from 'next/image'

const AboutContents = () => {
  return (
    <>
      <main className="mt-36 lg:mt-40 px-7 relative">
        <div className="w-full mr-auto ml-auto h-full max-w-[1200px]">
          <h1 className="text-2xl font-semibold tracking-tight">Team and Competition Details</h1>
          <p className="mt-4 text-md font-medium opacity-60">Website created for BPA Website Design (435) Competition 2023-2024</p>
          <p className="mt-1 text-md font-medium opacity-60">Theme: <span className="font-bold">Seize the Opportunity</span></p>
          <Image 
          src="/images/bpa-logo.jpg"
          alt="BPA Logo"
          width={100}
          height={100}
          className="mt-12"
          />
          <h1 className="text-2xl mt-12 font-semibold tracking-tight">Roles and Responsibilities</h1>
          <p className="mt-4 text-md font-medium opacity-60">Member 00143047: Lead Programmer, UI/UX Designer, Team Captain</p>
          <p className="mt-4 text-md font-medium opacity-60">Member ________: Enter Roles and Responsibilities here....</p>
          <p className="mt-4 text-md font-medium opacity-60">Member ________: Enter Roles and Responsibilities here....</p>
          <h1 className="text-2xl mt-12 font-semibold tracking-tight">Competitor Details</h1>
          <p className="mt-4 text-md font-medium opacity-60">Website Design Team from Charter School of Wilmington, Wilmington, DE, 19807. Secondary Division (9-12)</p>
        </div>
      </main>
    </>
  )
}

export default AboutContents
