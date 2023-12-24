import React from 'react'

// Component Imports
import DefaultNavbar from '../components/Navbars/DefaultNavbar'
import ReservationContent from './components/ReservationContent'
import { Toaster } from 'react-hot-toast'

const EventsPage = () => {
  return (
  <>
      <Toaster />
      <DefaultNavbar />
      <ReservationContent />
  </>
  )
}

export default EventsPage
