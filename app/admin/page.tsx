import React from 'react'

// Component Imports 
import DefaultNavbar from '../components/Navbars/DefaultNavbar';
import BaseAdminWrapper from './components/BaseAdminWrapper';

import { cookies } from "next/headers";

const Admin = () => {
  const cookieStore = cookies();
  console.log(cookieStore.get('briojue'))
  const ownerVerified: boolean = (!(!cookieStore.get('ownerverified') || cookieStore.get('ownerverified') == undefined))
  return (
  <>
      <p></p>
      { ownerVerified && (
      <>
      <DefaultNavbar />
      <div className="mt-44 w-full min-h-[50vh] px-7">
        <BaseAdminWrapper />
      </div>
      </>
      ) }
  </>
  )
}

export default Admin;
