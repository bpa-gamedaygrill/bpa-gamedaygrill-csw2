import React from 'react'
import { cookies } from 'next/headers'

// Component Imports 
import ReservationsTopBar from './ReservationTopBar'
import AccessDenied from './AccessDenied'
import ReserveTopBarSkeleton from './ReserveTopBarSkeleton'
import ReservationList from './ReservationList'

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
            <ReservationList userId={cookieStore.get('__obj2')?.value as string} />
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
