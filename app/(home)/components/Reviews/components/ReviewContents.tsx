import React from 'react'

// Component Imports 
import ReviewCard from "./ReviewCard";

const ReviewContents = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-800 mb-2">Don't take our word for it.</h1>
      <p className="text-[0.92rem] font-medium text-neutral-500">Look at the reviews left by thousands of customers.</p>

      <div className="w-full gap-5 flex-col md:flex-row flex items-center justify-between py-3 mt-8">
        <ReviewCard
          reviewContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dea commodo consequat'
          authorName='Josh Beacone'
          authorPfp='/images/forky-pfp.jpg'
        />
        <ReviewCard
          reviewContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dea commodo consequat'
          authorName='Josh Beacone'
          authorPfp='/images/starry-pfp.jpg' 
        />
        <ReviewCard
          reviewContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dea commodo consequat'
          authorName='Josh Beacone'
          authorPfp='/images/sunset-pfp.jpg' 
        />
      </div>
    </>
  )
}

export default ReviewContents;
