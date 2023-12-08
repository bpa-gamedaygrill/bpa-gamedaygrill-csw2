import React from 'react'
import EventsTopBar from './EventsTopBar'
import EventResults from './EventResults'

const EventsContent = () => {
  return (
  <>
      <main className="mt-36 lg:mt-40 px-7 relative">
        <div className="w-full mr-auto ml-auto h-full max-w-[1200px]">
          <EventsTopBar />
          <EventResults />
        </div>
      </main>
  </>
  )
}

export default EventsContent
