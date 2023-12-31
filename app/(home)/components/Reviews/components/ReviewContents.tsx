import React from 'react'
import Link from 'next/link';

// Component Imports 
import ReviewCard from "./ReviewCard";
import { ChevronRight, ArrowRight } from 'react-feather';

const ReviewContents = () => {
  return (
    <>
      <div className="w-full flex items-center h-fit justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-800 mb-2">Don't take our word for it.</h1>
          <p className="text-[0.92rem] font-medium text-neutral-500">Look at the reviews left by thousands of customers.</p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full gap-5 flex-col md:flex-row flex items-center justify-between py-3 mt-8">
          <ReviewCard
            reviewContent='“Great service and staff. Food was delicious and came out in an orderly fashion, great for parties and large groups.”'
            authorName='Josh Beacone'
            authorPfp='/images/forky-pfp.jpg'
          />
          <ReviewCard
            reviewContent='“Food was delicious, staff members were friendly and the environment was great. I would definitely recommend!”'
            authorName='Jacob Black'
            authorPfp='/images/starry-pfp.jpg' 
          />
          <ReviewCard
            reviewContent='“Super clean, food was super fresh, and workers were very friendly and in the game spirit. This is a gem of a restuarant!”'
            authorName='Kaitlynn Anthony'
            authorPfp='/images/sunset-pfp.jpg' 
          />
        </div>
        <div className="w-full gap-5 flex-col md:flex-row flex items-center justify-between py-3 mt-4">
          <ReviewCard
            reviewContent='“Website was detailed and the events calendar matched up perfectly with upcoming games. Site was easy to navigate. 1000/10 stars.”'
            authorName='Greg Murphy'
            authorPfp='/images/forky-pfp.jpg'
          />
          <ReviewCard
            reviewContent='Very fresh food, and festive atmosphere. Best place to watch sports and eat, hands down. Also, I loved the atmosphere.' 
            authorName='Chelsea Lu'
            authorPfp='/images/starry-pfp.jpg' 
          />
          <ReviewCard
            reviewContent='I came here multiple times, and every time I enter, I never want to leave. The site has also helped make my food-ordering process faster.'
            authorName='Mac Jones'
            authorPfp='/images/sunset-pfp.jpg' 
          />
        </div>
      </div>
    </>
  )
}

export default ReviewContents;
