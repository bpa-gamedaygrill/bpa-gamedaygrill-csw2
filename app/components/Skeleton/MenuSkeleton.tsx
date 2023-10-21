import React from 'react'

interface MenuSkeletonInterface {
  customStyles?: string;
}

const MenuSkeleton: React.FC<MenuSkeletonInterface> = ({ customStyles }) => {
  return (
  <>
      <div className={`animate-pulse flex flex-col items-center gap-5 relative w-full ${customStyles} `}>
        <div className="w-full h-[150px] rounded-lg bg-neutral-200" />
        <div className="w-full h-[15px] bg-neutral-300 mt-3 rounded-lg" />
        <div className="w-3/4 h-[15px] bg-neutral-200 rounded-lg" />
        <div className="w-5/6 h-[15px] bg-neutral-300 rounded-lg" />
      </div>
  </>
  )
}

export default MenuSkeleton
