import React from 'react'
import MenuTopBar from './MenuTopBar'
import MenuFiltersBar from './MenuFiltersBar'
import MenuResults from './MenuResults'

const MenuContent = () => {
  return (
    <>
      <main className="mt-36 lg:mt-40 px-7 relative">
        <div className="w-full mr-auto ml-auto h-full max-w-[1200px]">
          <MenuTopBar />
          <MenuFiltersBar />
          <MenuResults />
        </div>
      </main>
    </>
  )
}

export default MenuContent
