import React from 'react'

// Component Imports 
import BaseAdminContent from './BaseAdminContent';


const BaseAdminWrapper= () => {
  return (
  <>
        <div className="max-w-[1200px] relative mr-auto ml-auto">
          <BaseAdminContent />
        </div>
  </>
  )
}

export default BaseAdminWrapper;
