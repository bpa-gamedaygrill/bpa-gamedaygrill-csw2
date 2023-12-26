"use client";
import React, { useState, useEffect } from 'react'
import ReactInputMask from 'react-input-mask';
import { parse, isValid, format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import axios from 'axios';
import { toast } from 'react-hot-toast';
// Expects date in MM/DD/YYYY
function isValidDate(date: string): boolean {
  const parsed = parse(`${date}`, 'MM/dd/yyyy', new Date(), { locale: enGB })
  return isValid(parsed) ? true : false;
}

interface OnlineReservationModalInterface {
  isActive: boolean;
  setIsActive: (state: boolean) => void;
  userId: string;
}

const notify = ( message: string, isError?: boolean, isSuccess?: boolean ) => {
  if (isError) {
    toast.error(message)
    return
  } else if (isSuccess) {
    toast.success(message)
    return
  }
}

const OnlineReservationModal: React.FC<OnlineReservationModalInterface> = ({ isActive, setIsActive, userId }) => {
  const [date, setDate] = useState<string | null>(null)
  const [isValidDateState, setIsValidDateState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const inputStyles = `px-4 py-2.5 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full text-neutral-600`
  useEffect(() => {
    if (date?.length==10) {
      setIsValidDateState(prev => isValidDate(date as string))
    }
    else {
      setIsValidDateState(prev => false)
    }
  }, [date])
  const handleSubmit = () => {
    setIsLoading(prev => true)
    axios.post("/api/reservation/create", {
      date: date,
      userId: userId
    })
    .then(response => {
        console.log(response)
        notify("Success", false, true)
        window.location.reload()
      })
    .catch((error) => {
        notify(`${error.response.data}`, true, false)
        console.error(error)
      })
    .finally(() => {
        setIsLoading(prev => false)
        setIsActive(false)
      })
  }
  return (
  <>
      { isActive && 
        <section className="fixed top-0 left-0 z-[100] pointer-events-auto w-full h-full bg-black/20 flex items-center justify-center backdrop-blur-sm px-3">
          <div className="w-full h-full max-w-[400px] max-h-[275px] bg-white rounded-md px-5 py-6 flex flex-col items-center justify-center">
                    <ReactInputMask 
                    mask="99/99/9999"
                    disabled={false}
                    maskChar=""
                    value={date as string}
                    onChange={(e) => setDate(e.target.value as string)}
                    placeholder='Enter reservation date'
                    className={inputStyles}
                    />
                    { !isValidDateState && <p className="self-start mt-3 text-primary-red opacity-60">Invalid Date</p> }
                    <button disabled={!isValidDateState || isLoading} onClick={handleSubmit} className={`w-full px-4 py-2 bg-primary-red text-white rounded-md mt-6 text-sm font-medium cursor-pointer hover:bg-red-700 ${!isValidDateState && "bg-red-700 !cursor-auto opacity-70"}`}>{ isLoading ? "Loading" : "Submit" }</button>
            <button className="w-full px-4 py-2 bg-neutral-100 text-neutral-700 rounded-md mt-2 text-sm font-medium cursor-pointer hover:bg-neutral-200" onClick={() => setIsActive(false)}>Cancel</button>
          </div>
        </section>
      }
  </>
  )
}

export default OnlineReservationModal;
