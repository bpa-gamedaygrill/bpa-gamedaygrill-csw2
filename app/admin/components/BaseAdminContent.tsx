import React from 'react'
import Link from "next/link";

const BaseAdminContent = () => {
  return (
  <>
        <h1 className="text-2xl font-semibold opacity-80 flex items-center justify-start gap-3">GamedayGrill Admin Panel</h1>
        <p className="text-sm mt-2 opacity-60 font-medium">Edit menu items, view analytics, and more</p>
      <div className="mt-12 flex items-center justify-start gap-3">
        <Link href="/admin/menuedit"
        className="bg-neutral-100 px-6 py-2 flex items-center justify-center min-h-[40px] rounded-md hover:bg-neutral-200 transition-all duration-150 ease-in-out group"
          >
            <p className="text-black text-sm font-medium opacity-90">Edit Menu</p>
          </Link>
        <Link href="/admin/analytics"
        className="bg-neutral-100 px-6 py-2 flex items-center justify-center min-h-[40px] rounded-md hover:bg-neutral-200 transition-all duration-150 ease-in-out group"
          >
            <p className="text-black text-sm font-medium opacity-90">Analytics</p>
          </Link>
      </div>
  </>
  )
}

export default BaseAdminContent;
