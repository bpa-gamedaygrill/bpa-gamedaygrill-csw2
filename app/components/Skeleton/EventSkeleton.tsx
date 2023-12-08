import React from 'react'

interface EventSkeletonInterface {
  customStyles?: string;
}

const EventSkeleton: React.FC<EventSkeletonInterface> = ({ customStyles }) => {
  return (
  <>
      <div className={`animate-pulse flex items-center flex-col sm:flex-row gap-0 sm:gap-5 relative w-full ${customStyles} `}>
        <div className="w-full sm:w-[50%] h-full min-h-[120px] rounded-lg bg-neutral-200" />
        <div className="flex flex-col h-full items-center justify-evenly py-3 min-h-[120px] w-full sm:w-[50%]">
          <div className="w-full h-[15px] bg-neutral-300 mt-3 rounded-lg" />
          <div className="w-3/4 h-[15px] bg-neutral-200 rounded-lg" />
          <div className="w-5/6 h-[15px] bg-neutral-300 rounded-lg" />
        </div>
      </div>
  </>
  )
}

export default EventSkeleton;
