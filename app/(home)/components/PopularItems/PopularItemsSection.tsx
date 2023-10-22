"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


import { motion } from 'framer-motion';

import { ChevronRight, ArrowRight } from 'react-feather';

const PopularItemsSection = () => {
  return (
  <>
      <section className="px-7 my-14 h-fit">
        <div className="w-full mr-auto ml-auto h-fit max-w-[1200px]">
          {/* CATEGORIES SECTION */}
          <motion.div
                initial={{ scale: 0.97, opacity: 0, filter: 'blur(3px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.4 }}
>
            <div className="w-full flex items-center h-fit justify-between">
              <h1 className="text-xl font-semibold">Categories</h1>
              <Link 
                href="menu"
                className="bg-white px-6 py-0 flex gap-2 items-center justify-center min-h-[40px] rounded-full hover:bg-neutral-100 transition-all duration-150 ease-in-out group"
              >
                <p className="text-[0.9rem] font-medium text-neutral-400">View All</p>
                <ChevronRight 
                size={15}
                  color='rgb(163, 163, 163)'
                className='group-hover:hidden block'
                />
                <ArrowRight 
                size={15}
                  color='rgb(163, 163, 163)'
                className='group-hover:block hidden'
                />
              </Link>

            </div>

            <div className="mt-7 w-full flex flex-col h-fit md:flex-row md:items-center md:justify-between gap-3">
              <Link href="menu?category=appetizer" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
                <Image 
                src="/images/landing_appetizer_preview.png"     
                alt="appetizers"
                layout='fill'
                style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
                <p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Appetizers</p>
              </Link>
              <Link href="menu?category=appetizer" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
                <Image 
                src="/images/landing_entree_preview.png"     
                alt="appetizers"
                layout='fill'
                style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
                <p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Entrees</p>
              </Link>
              <Link href="menu?category=entree" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
                <Image 
                src="/images/landing_dessert_preview.png"     
                alt="appetizers"
                layout='fill'
                style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
                <p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Desserts</p>
              </Link>
              <Link href="menu?category=beverages" className="relative md:w-1/4 w-full md:h-[100px] min-h-[100px]">
                <Image 
                src="/images/landing_beverages_preview.png"     
                alt="appetizers"
                layout='fill'
                style={{ objectFit: 'cover', borderRadius: '10px' }}
                />
                <p className="absolute top-[50%] left-[50%] text-white font-semibold text-xl opacity-90" style={{ transform: 'translate(-50%, -50%)' }}>Beverages</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  </>
  )
}

export default PopularItemsSection;
