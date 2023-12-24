import React from 'react'
import { cookies } from 'next/headers'

// Component Imports 
import ReservationsTopBar from './ReservationTopBar'
import AccessDenied from './AccessDenied'
import ReserveTopBarSkeleton from './ReserveTopBarSkeleton'

const ReservationContent = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')
  return (
  <>
      <main className="mt-36 lg:mt-40 px-7 relative">
        <div className="w-full mr-auto ml-auto h-full max-w-[1200px]">
          { token ? (
          <>
            <ReservationsTopBar />
          </> 
          )
          : (
          <>
            <AccessDenied />
            <ReserveTopBarSkeleton />
          </>
          )
          }
        </div>
      </main>

  </>
  )
}

export default ReservationContent
