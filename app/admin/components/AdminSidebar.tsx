"use client";

import React from 'react'
import { X, Info as InfoIcon, Calendar as CalendarIcon, Code as BriefcaseIcon ,BookOpen as MenuOrderingIcon, Bookmark as EventsIcon, Inbox as RewardsIcon, Briefcase, Home, Edit as EditIcon, BarChart as AnalyticsIcon  } from "react-feather";
import MenuLogo from '../../../app/components/NavigationMenus/components/MenuLogo';
import Link from 'next/link';

const AdminSidebar = () => {
  const slideLinkStyles = "flex items-center justify-start gap-4 w-full py-2 px-2 bg-white rounded-md";
  return (
  <>
      <section className={`top-0 left-0 sticky min-h-[100vh] max-w-[40%] md:max-w-[33%] lg:max-w-[25%] xl:max-w-[20%] w-full h-full`}>
        <nav className={`h-full flex flex-col items-start w-full bg-white px-5 py-6 absolute top-0 transition-all duration-300 ease-in-out overflow-y-auto border-r-[1px] border-r-neutral-200`}>
          <div className={`flex w-full items-center justify-between`}>
            <MenuLogo />
          </div>

          <section className="w-full py-5 mt-7 flex flex-col items-start gap-2">
            <Link href="/admin" className={`${slideLinkStyles}`}>
              <Home 
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className=" text-sm text-neutral-600">Overview</p>
            </Link>
              <Link href="/admin/menuedit" className={`${slideLinkStyles}`}>
              <EditIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Edit Menu</p>
            </Link>
            <Link href="/admin/analytics" className={`${slideLinkStyles}`}>
              <AnalyticsIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Analytics</p>
            </Link>


            <div className="w-full h-[1px] bg-neutral-200 mt-5"/>

            <Link href="signup" className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md mt-7">
              <p className="text-neutral-600 text-sm font-semibold">Sign Up</p>
            </Link>

            <Link href="menu" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
              <p className="text-white font-semibold text-sm">Order Now</p>
            </Link>
          </section>
        </nav>
      </section>
  </>
  )
}

export default AdminSidebar

