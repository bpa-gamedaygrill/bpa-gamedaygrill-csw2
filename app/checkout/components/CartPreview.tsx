import React from 'react'

// Component Imports
import CartContent from '../../components/NavigationMenus/components/CartContent'

const CartPreview = () => {
  return (
  <>
      <section className="w-full max-w-[30%] relative justify-center bg-white border-[1px] rounded-md border-neutral-200 h-full flex flex-col minimal-scrollbar items-start gap-2 px-7 py-12">
        <CartContent usedInCheckout />
      </section>
  </>
  )
}

export default CartPreview
