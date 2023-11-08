import React from 'react'

import ProtectRoute from './components/SecurityForm';

import { verifySecureUrl } from '../../../libs/utils/secureUrl/verifySecureUrl';

import { redirect } from 'next/navigation'

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  if (!searchParams.redirecturl || !searchParams.secureurl) {
    redirect('/')
  }
  const secureUrlVerified = await verifySecureUrl(JSON.parse(searchParams.secureurl as string), JSON.parse(searchParams.redirecturl as string))
  if (!secureUrlVerified) {
    redirect('/')
  }
  return (
    <>
    </>
  )
}
