import MenuSkeleton from '../../components/Skeleton/MenuSkeleton';
import React from 'react'

const MenuResults = () => {
  return (
    <>
     <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-28 justify-center items-center">
      <MenuSkeleton />
      <MenuSkeleton />
      <MenuSkeleton />
      <MenuSkeleton />
      <MenuSkeleton customStyles='hidden md:flex' />
      <MenuSkeleton customStyles='hidden md:flex' />
  </section>
    </>
  )
}

export default MenuResults;
