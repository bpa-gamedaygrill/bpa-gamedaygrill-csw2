import React from 'react'
import Link from 'next/link'

const AccessDenied = () => {
  return (
  <>
      <section className="fixed top-0 left-0 z-[100] pointer-events-auto w-full h-full bg-black/20 flex items-center justify-center backdrop-blur-sm">
        <div className="px-7 py-10 bg-white rounded-lg w-full md:h-full max-w-[400px] md:max-h-[250px] flex flex-col items-center justify-between gap-8">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-2xl font-semibold tracking-tight opacity-80 text-center">Sign in to access this page</h1>
            <p className="text-sm opacity-50 text-center mt-4">Uh oh! It looks like you are not currently signed in. In order to reserve ahead of time, an account is required.</p>
          </div>
          <div className="flex items-center justify-center gap-5">
          <Link href="/" className="bg-white px-6 py-0 flex items-center justify-center min-h-[40px] rounded-full hover:bg-neutral-100 transition-all duration-150 ease-in-out">
              <p className="text-[0.9rem] font-medium text-neutral-400">
                Back Home
              </p>
              </Link>
          <Link href="/login" className="bg-primary-red px-6 py-0 flex items-center justify-center min-h-[40px] rounded-full hover:bg-red-700 transition-all duration-150 ease-in-out">
              <p className="text-[0.9rem] font-medium text-white">
                Sign in
              </p>
              </Link>
          </div>
        </div>
      </section>
  </>
  )
}

export default AccessDenied
