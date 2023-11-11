"use client";
import React, { useState, useEffect } from 'react'

import { parseCookies, setCookie, destroyCookie } from 'nookies';

import { motion } from 'framer-motion';

import { useSearchParams } from 'next/navigation'



import { verifySecureUrl } from '../../../../libs/utils/secureUrl/verifySecureUrl';


interface ProtectRouteInterface {
  cred: string;
}

const ProtectRoute: React.FC<ProtectRouteInterface> = ({ cred }) => {
  const cookies = parseCookies();
  const [ownerNotVerified, setOwnerNotVerified] = useState<boolean>(!cookies.ownerverified || cookies.ownerverified == undefined)
  const [credential, setCredential] = useState("");
  const [credentialError, setCredentialError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchParams = useSearchParams()

  const updateCredential = (e: any) => {
    setCredentialError(() => false);
    setCredential(() => e.target.value);
  }
  const handleFormSubmit = () => {
    let errorCount: number = 0;
    setIsLoading(true);
    if (!credential.trim()) {
      setCredentialError(() => true);
      errorCount++
      setIsLoading(false);
    }
    if (errorCount > 0) {
      console.log("errors found")
      return
    }

    if (credential == cred) {
      setCookie(null, 'ownerverified', 'true', {
        maxAge: 60 * 60,
        path: '/', 
      });
      window.location.replace(JSON.parse(searchParams.get('redirecturl') as string));
      return
    } else {
      alert("Incorrect Credential")
    }
    setIsLoading(() => false);
  }

  useEffect(() => {
    console.log(`HELLO: ${ownerNotVerified && "hiu"}`)
  }, [ownerNotVerified])
  
  // useEffect(() => {
  //   const redirectUrl = JSON.parse(searchParams.get('redirecturl') as string);
  //   const secureUrl = JSON.parse(searchParams.get('secureurl') as string);
  //   if (!redirectUrl || !secureUrl) {
  //     window.location.replace("/");
  //     return
  //   }
  //   const verifyUrlFunc = async() => {
  //     const verifyUrl = await verifySecureUrl(secureUrl, redirectUrl);
  //     return verifySecureUrl;
  //   }
  //   // const verifyUrl = verifyUrlFunc(); 
  //   // console.log(verifyUrl);
  // }, [])

  return (
    <>
      <section
        className={`fixed px-3 top-0 left-0 w-full h-full bg-black/0 backdrop-blur-[6px] flex items-center justify-center z-[100]`}
        >
            <div className="w-full h-full bg-white max-w-[400px] px-7 py-8 rounded-md border-[1px] border-neutral-300 max-h-[250px]">
              <div className="w-full flex items-center justify-between">
                <p className="text-[0.9rem] font-medium opacity-60">Restricted Endpoint</p>
                <a href="/" className="text-[0.92rem] font-semibold opacity-60">x</a>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
              <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3 mt-10">
                <input type='password' onChange={updateCredential} value={credential} placeholder='Enter your credential' className={`px-4 py-2.5 bg-white border-[1px] rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium ${ credentialError ? "border-primary-red/40 border-[1.5px]" : "border-neutral-200" }`} />
              </div>
              <button className={`${ isLoading ? "bg-red-600/70 cursor-auto" : "bg-primary-red cursor-pointer hover:bg-red-700" } w-full text-white text-sm font-semibold py-2.5 px-4 rounded-md mb-0`} onClick={handleFormSubmit}>{ isLoading ? "Loading..." : "Submit" }</button>
              </div>
            </div>
        </section>
    </>
  )
}
export default ProtectRoute;
