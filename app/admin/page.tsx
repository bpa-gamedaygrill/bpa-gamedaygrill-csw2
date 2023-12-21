import React from 'react'

// Component Imports 
import BaseAdminWrapper from './components/BaseAdminWrapper';
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

import { createSecureUrl } from '../../libs/utils/secureUrl/createSecureUrl';

const Admin = async() => {
  return (
  <>
      <div className="mt-24 ml-12 w-full min-h-[50vh] px-7">
        <BaseAdminWrapper />
      </div>
  </>
  )
}

export default Admin;
