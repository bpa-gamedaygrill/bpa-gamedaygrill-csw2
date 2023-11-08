"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { parseCookies, setCookie } from 'nookies';

const Form = () => {
  const cookies = parseCookies()


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);

  useEffect(() => {
    console.log("test", { cookies })
    if (cookies.token) {
      window.location.replace("/");
    }
  }, [])

  const updateFullName = (e: any) => {
    setFullNameError(() => false);
    setFullName(() => e.target.value);
  }
  const updateEmail = (e: any) => {
    setEmailError(() => false);
    setEmail(() => e.target.value);
  }
  const updatePassword = (e: any) => {
    setPasswordError(() => false);
    setPassword(() => e.target.value);
  }

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        window.location.replace("/")
      }, 1000)
    }
  }, [isFinished])

  const handleFormSubmit = () => {
    let errorCount: number = 0;
    setIsLoading(true);
    if (!fullName.trim()) {
      setFullNameError(() => true);
      errorCount++
      setIsLoading(false);
    }
    if (!email.trim()) {
      setEmailError(() => true);
      errorCount++
      setIsLoading(false);
    }
    if (!password.trim()) {
      setPasswordError(() => true);
      errorCount++
      setIsLoading(false);
    }
    if (errorCount > 0) {
      return
    }

    axios.post('/api/user/create', {
      fullName: fullName,
      email: email,
      password: password
    })
    .then(response => {
      setCookie(null, 'token', response.data.token)
      console.log("SUCCESSFULLY SIGNED UP!");
      console.log("RESPONSE:", response)
      setIsFinished(() => true);
    })
    .catch(error => {
        console.error("An error has occured. Please check DB and Server logs.");
    })
    .finally(() => {
        // setIsLoading(() => false);
    })

  }
  return (
  <>
      <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
        <p className={`${ fullNameError && "text-primary-red" }`}>Full Name*</p>
        <input type='text' onChange={updateFullName} value={fullName} placeholder='Enter your name' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
      </div>
      <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
        <p className={`${ emailError && "text-primary-red" }`}>Email*</p>
        <input type='text' onChange={updateEmail} value={email} placeholder='Enter your email' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
      </div>
      <div className="w-full flex flex-col items-start font-medium text-md justify-start text-neutral-700 gap-3">
        <p className={`${ passwordError && "text-primary-red" }`}>Password*</p>
        <input type='password' onChange={updatePassword} value={password} placeholder='Enter your password' className="px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-700 font-medium" />
      </div>

      <button className={`${ isLoading ? "bg-red-600/70 cursor-auto" : "bg-primary-red cursor-pointer hover:bg-red-700" } text-white text-sm font-semibold py-3.5 px-4 rounded-md mb-0`} onClick={handleFormSubmit}>{ isFinished ? "Success" : isLoading ? "Loading..." : "Sign Up" }</button>
  </>
  )
}

export default Form;
