import React from 'react'
import Image from 'next/image';

interface ReviewCardInterface {
  reviewContent: string;
  authorName: string;
  authorPfp: string;
}

const ReviewCard: React.FC<ReviewCardInterface> = ({ reviewContent, authorName, authorPfp }) => {
  return (
  <>
      <div className="px-4 py-5 rounded-md border-[1px] border-neutral-300 w-full">
        <p className="leading-snug text-[0.92rem] text-center text-neutral-600">"{ reviewContent }"</p>
        <div className="w-full items-center flex justify-between mt-7">
          <div className="flex relative items-center justify-start gap-3 w-full">
            <div className="!w-[35px] relative overflow-hidden !min-w-[35px] !min-h-[35px] !h-[35px] rounded-full">
              <Image 
              src={authorPfp} 
              layout="fill"
              alt="five stars"
              className="rounded-full"
              />
            </div>
            <div className="flex flex-col w-full items-start justify-between">
              <h3 className="text-sm font-semibold text-neutral-700">{ authorName }</h3>
              <p className="text-[0.7rem] text-neutral-500">Food Critic</p>
            </div>
            <div className="relative w-[50%] right-0  flex items-start justify-start h-[20px]">
            <Image 
            src={"/images/fivestars.svg"} 
            layout="fill"
            alt="five stars"
            />
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default ReviewCard;
