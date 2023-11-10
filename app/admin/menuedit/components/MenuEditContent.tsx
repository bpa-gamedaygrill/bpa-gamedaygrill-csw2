import React from 'react'

import Link from 'next/link'


import db from "../../../../libs/prisma/db";

import MenuEditItem from './MenuEditItem'
import MenuEditNewItem from './MenuEditNewItem';

const MenuEditContent = async() => {
  let menuItems = null;
  let isError: boolean = false;
  try {
    menuItems = await db.menuItem.findMany();
    console.log(`MENU ITEMS FROM EDIT PAGE: ${JSON.stringify(menuItems)}`)
  } catch (e) {
    console.log("An Error Occured", e)
    isError = true;
  }
  return (
  <>
      <section className="w-full bg-white border-[1px] border-neutral-300 py-6 px-8 rounded-lg">
        <div className="flex w-full flex-wrap gap-5 md:flex-row md:gap-3 flex-col items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Menu Edit</h1>
          <div className="flex items-center justify-center gap-3">
          <Link href="/admin" className="bg-white hover:bg-neutral-100 px-4 py-2 rounded-full">
              <p className="font-medium tracking-tight opacity-50">Go Back</p>
          </Link>
            <MenuEditNewItem />
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2  gap-7 mb-14 justify-center items-center">
      {
      menuItems ? menuItems.map((item: any) => (
        <>
            <MenuEditItem key={item.id} imageUrl={item.imageUrl} itemName={item.itemName} itemDesc={item.itemDescription as string} itemPrice={item.itemPrice} />
        </>
      )) : isError ? "An Error Occured" : "No Menu Items Found"
      }
        </div>
      </section>
  </>
  )
}

export default MenuEditContent
