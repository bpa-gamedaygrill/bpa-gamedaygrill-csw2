import Image from "next/image";
import Link from 'next/link';
import React from 'react'

// Component Imports 
import DefaultNavbarMiddlePill from './components/DefaultNavbarMiddlePill';
import ShoppingCartButton from '../Buttons/ShoppingCartButton';
import HamburgerMenuButton from "../Buttons/HamburgerMenuButton";
import SlidingHamburgerMenu from "../NavigationMenus/SlidingHamburgerMenu";

const DefaultNavbar = () => {
  return (
    <>
      <SlidingHamburgerMenu />
      <nav className="flex justify-center items-center z-[99] fixed w-full top-0 left-0 px-7 bg-white backdrop-blur-[3px] py-6">
        <section className="w-full ml-auto mr-auto h-full max-w-[1200px]  flex justify-between items-center">
                    <HamburgerMenuButton 
            buttonDimensions={50}
            customStyles="hidden md:flex lg:hidden"
          />

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

          <DefaultNavbarMiddlePill 
          customStyles="hidden lg:flex"
          />

          <div className="w-fit h-[20px] hidden md:flex items-center justify-center gap-7">
            
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
            
          <HamburgerMenuButton 
            buttonDimensions={50}
            customStyles="md:hidden"
          />

        </section>
      </nav>
    </>
  )
}

export default DefaultNavbar;
