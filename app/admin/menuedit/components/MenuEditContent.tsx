import React from 'react'

import Link from 'next/link'

import MenuEditItem from './MenuEditItem'

const MenuEditContent = () => {
  return (
  <>
      <section className="w-full bg-white border-[1px] border-neutral-300 py-6 px-8 rounded-lg">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Menu Edit</h1>
          <Link href="/admin" className="bg-white hover:bg-neutral-100 px-6 py-2 rounded-full">
              <p className="font-medium tracking-tight opacity-50">Go Back</p>
          </Link>
        </div>
        <div className="mt-14 w-full flex items-start justify-between flex-wrap gap-5">
          <MenuEditItem />
          <MenuEditItem />
          <MenuEditItem />
          <MenuEditItem />
        </div>
      </section>
  </>
  )
}

export default MenuEditContent
