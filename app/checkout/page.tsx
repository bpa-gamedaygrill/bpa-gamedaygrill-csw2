import React from 'react'

// Component Imports
import DefaultNavbar from '../components/Navbars/DefaultNavbar'
import CheckoutPageContents from './components/CheckoutPageContents'
import { Toaster } from "react-hot-toast";

const Checkout = () => {
  return (
  <>
      <Toaster />
      <CheckoutPageContents />
  </>
  )
}

export default Checkout
