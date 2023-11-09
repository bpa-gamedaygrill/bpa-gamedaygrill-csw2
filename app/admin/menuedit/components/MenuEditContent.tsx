import React from 'react'

import Link from 'next/link'

import db from "../../../../libs/prisma/db";

import MenuEditItem from './MenuEditItem'

const MenuEditContent = async() => {
  const menuItems = await db.menuItem.findMany();
  console.log(`MENU ITEMS FROM EDIT PAGE: ${JSON.stringify(menuItems)}`)
  return (
  <>
      <section className="w-full bg-white border-[1px] border-neutral-300 py-6 px-8 rounded-lg">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Menu Edit</h1>
          <Link href="/admin" className="bg-white hover:bg-neutral-100 px-6 py-2 rounded-full">
              <p className="font-medium tracking-tight opacity-50">Go Back</p>
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2  gap-7 mb-28 justify-center items-center">
      {
      menuItems && menuItems.map((item) => (
        <>
            <MenuEditItem key={item.id} imageUrl={item.imageUrl} itemName={item.itemName} itemDesc={item.itemDescription as string} itemPrice={item.itemPrice} />
        </>
      ))
      }
        </div>
      </section>
  </>
  )
}

export default MenuEditContent
