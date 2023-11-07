import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';

const CALContents = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-800 mb-2">Contact and Location</h1>
        <p className="text-[0.92rem] font-medium text-neutral-500">See where our restaurant is located.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 relative mt-10 md:mt-14">
        {/* Left Side of the Hero Section */}
        <ContactForm />

        {/* Right Side of the Hero Section (Where the IMG will go) */}
        <section className="w-full flex items-center justify-end h-full md:max-w-[50%] relative">
          <div className="relative w-full md:w-[80%] h-[350px] cursor-pointer group" onClick={() => window.open("https://www.google.com/maps/dir//39.6666344,-75.6651434/@39.5991805,-75.7123939,11.36z?entry=ttu")}>
          <div className="absolute w-full h-full bg-black/0 rounded-xl group-hover:bg-black/10 z-10"/>
          <div className="z-20 absolute py-2 px-3 bg-white top-3 left-3 rounded-sm group-hover:opacity-80">
              <p className="font-medium text-sm md:text-[0.7rem] opacity-50 group-hover:opacity-70">2023 GDG Street, DE</p>
          </div>
          <Image 
            src="/images/gdg_map.png"
            alt="Hero Image"
            fill
            className=' !w-full !h-[350px] rounded-xl object-cover z-0'
            />
          </div>
        </section>

      </div>
    </>
  )
}

export default CALContents;
