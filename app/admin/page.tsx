import React from 'react'

// Component Imports 
import DefaultNavbar from '../components/Navbars/DefaultNavbar';
import BaseAdminWrapper from './components/BaseAdminWrapper';
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

import { createSecureUrl } from '../../libs/utils/secureUrl/createSecureUrl';

const Admin = async() => {
  return (
  <>
      <DefaultNavbar />
      <div className="mt-44 w-full min-h-[50vh] px-7">
        <BaseAdminWrapper />
      </div>
  </>
  )
}

export default Admin;
