import Image from "next/image";
import Link from 'next/link';
import React from 'react'

// Component Imports 
import DefaultNavbarMiddlePill from './components/DefaultNavbarMiddlePill';
import ShoppingCartButton from '../Buttons/ShoppingCartButton';

const DefaultNavbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center  px-7 py-6">
        <section className="w-full ml-auto mr-auto h-full max-w-[1200px]  flex justify-between items-center">
          <div className="flex items-center justify-center gap-4 cursor-pointer">
            <div className="w-[40px] h-[40px] relative">
              <Image 
              src="images/logo-big.svg"
                alt="logo"
              layout="fill"
              />
            </div>
            <h1 className="text-2xl font-bold ">Game Day Grill</h1> 
          </div>

          <DefaultNavbarMiddlePill />

          <div className="w-fit h-[20px] flex items-center justify-center gap-7">
            
            <ShoppingCartButton 
            buttonDimensions={40}
            />

            <Link 
            href="signup"
            className="bg-primary-red px-6 py-2 flex items-center justify-center min-h-[40px] rounded-full hover:bg-red-700 transition-all duration-150 ease-in-out"
            >
              <p className="text-[0.9rem] font-medium text-white">Sign Up</p>
            </Link>
          </div>
        </section>
      </nav>
    </>
  )
}

export default DefaultNavbar;
