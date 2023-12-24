import React from 'react'
import Image from "next/image";
import Link from "next/link"

// Component Imports 
import { FooterLink } from './components/FooterLink';

const Footer = () => {
  return (
    <>
      <section className="px-5 py-6 bg-white border-t-[1px] mt-12 border-t-neutral-300">
        <div className="w-full mr-auto gap-7 ml-auto flex-col md:flex-row py-12 h-full max-w-[1200px] bg-white flex justify-between items-center relative">
          <div className="flex w-full flex-col sm:max-w-[50%] gap-3 items-start justify-center">
          <Link href="/" className="flex items-center justify-center gap-4 cursor-pointer w-full md:w-fit">
            <div className="w-[40px] h-[40px] relative">
              <Image 
              src="images/logo-big.svg"
                alt="logo"
              layout="fill"
              />
            </div>
            <h1 className="text-2xl tracking-tight font-bold ">Game Day <span className="text-primary-red">Grill</span></h1> 
          </Link>
            <p className="text-[0.92rem] text-neutral-500 w-full text-center md:text-left">Fueling Your Culinary Cravings and Game Day Spirit.</p>
          </div>

          <div className="flex items-center sm:items-start gap-14 md:gap-20 lg:gap-5 w-full flex-col sm:flex-row  lg:max-w-[45%] justify-around mt-8 md:mt-0 md:justify-between">
            <div className="flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="text-[1.45rem] font-semibold opacity-90">Navigate</h1>
              <FooterLink linkHref="" linkText="Home" />
              <FooterLink linkHref="menu" linkText="Menu" />
              <FooterLink linkHref="signup" linkText="Signup" />
              <FooterLink linkHref="login" linkText="Login" />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="text-[1.45rem] font-semibold opacity-90">Company</h1>
              <FooterLink linkHref="about" linkText="About" />
              <FooterLink linkHref="teaminfo" linkText="Team Info" />
              <FooterLink linkHref="/#contact" linkText="Contact" />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center gap-3">
              <h1 className="text-[1.45rem] font-semibold opacity-90">Bookings</h1>
              <FooterLink linkHref="reservations" linkText="Reservations" />
              <FooterLink linkHref="events" linkText="Events" />
              <FooterLink linkHref="rewards" linkText="Rewards" />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Footer;
