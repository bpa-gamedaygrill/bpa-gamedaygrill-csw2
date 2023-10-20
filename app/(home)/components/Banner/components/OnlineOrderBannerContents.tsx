import React from 'react'
import Image from "next/image";
import Link from "next/link";

const OnlineOrderBannerContents = () => {
  return (
    <>

          <Image src="/images/landing_banner_image.png"
          alt="footballseason"
          layout="fill"
          className='pointer-events-none z-10'
          style={{ objectFit: 'cover', borderRadius: '10px', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        priority={true}
          />

          <div className="relative w-full h-full md:w-3/4 lg:w-1/2 z-20 px-12 py-11 text-white flex flex-col md:items-start justify-center md:gap-6 items-center gap-3">
            <p className="text-secondary-yellow font-bold text-md md:text-[1.25rem] text-center md:text-left uppercase">Football Season is Here</p>
            <h1 className="md:text-4xl text-xl font-bold md:text-left text-center">Enjoy your favorite food, delivered straight to you.</h1>
            <p className="opacity-70 max-w-[80%] text-sm md:text-md md:text-left text-center">Order food for delivery or pickup on the Game Day Grill website.</p>
                      <Link 
            href="menu"
            className="bg-secondary-yellow px-6 py-0 flex items-center justify-center min-h-[40px] rounded-full hover:bg-[#AA8C23] transition-all duration-150 ease-in-out"
            >
              <p className="text-[0.9rem] font-semibold text-black">Order Now</p>
            </Link>

          </div>

      </>
  )
}

export default OnlineOrderBannerContents
