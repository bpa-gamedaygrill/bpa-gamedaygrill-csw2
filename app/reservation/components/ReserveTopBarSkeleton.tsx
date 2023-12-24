import React from 'react'

const ReserveTopBarSkeleton = () => {
  return (
    <>
      <div className="w-full py-3">
        <div className="text-[1.7rem] font-semibold w-full py-4 bg-neutral-200 max-w-[250px] rounded-md animate-pulse"></div>
        <div className="text-[1.7rem] font-semibold w-full py-2 bg-neutral-200 max-w-[450px] rounded-md animate-pulse mt-4"></div>
      </div>
    </>
  )
}

export default ReserveTopBarSkeleton
