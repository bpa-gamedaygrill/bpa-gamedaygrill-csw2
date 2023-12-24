"use client";
import React, { useState, useEffect } from 'react';
import { enUS } from 'date-fns/locale';
import axios from "axios";
import { format } from 'date-fns';
import { Trash2 as Trash } from 'react-feather';
import toast, { Toaster } from "react-hot-toast";
import deleteReservation from '../../../libs/actions/reservation/deleteReservation';

const notify = ( message: string, isError?: boolean, isSuccess?: boolean ) => {
  if (isError) {
    toast.error(message)
    return
  } else if (isSuccess) {
    toast.success(message)
    return
  }
}


interface ReservationListInterface {
  userId: string;
}

interface ReservationItemInterface {
  itemData: {
    id: string;
    reservationDate: string;
    userId: string;
  }
  fetchFunc: () => void;
}

const ReservationItem: React.FC<ReservationItemInterface> = ({ itemData, fetchFunc }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleDelete = async() => {
    setIsLoading(prev => true)
    const deleteAction = await deleteReservation(itemData.id as string)
    .then(response => {
        notify("Successfully deleted reservation", false, true)
        fetchFunc();
    })
    .catch(error => {
        notify("An error occured.", true, false)
        console.log("AN ERROR OCCURED")
        fetchFunc();
    })
  }
  return (
    <>
      <div className={` ${isLoading && "!opacity-50"} px-5 py-3 rounded-lg border-[1px] border-neutral-300 group relative`}>
        <h1>{format(itemData.reservationDate, 'MM/dd/yyyy', { locale: enUS })}</h1>
        <button className={`w-[35px] flex items-center justify-center cursor-pointer h-[35px] bg-white rounded-full p-1 border-[1px] border-neutral-300 absolute top-[-17px] right-[-17px] transition-all duration-150 hover:bg-neutral-50 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 ${isLoading && "!cursor-auto group-hover:!opacity-60"}`} disabled={isLoading} onClick={handleDelete}>
          <Trash size={18} opacity={0.5} />
        </button>
      </div>
    </>
  )
}

const ReservationList: React.FC<ReservationListInterface> = ({ userId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reservationData, setReservationData] = useState<{id: string; reservationDate: string; userId: string;}[] | null>(null);
  const fetchData = () => {
    setIsLoading(prev => true)
    setReservationData(prev => null)
    axios.post("/api/reservation/get", {
      userId: userId
    })
    .then(response => {
        setReservationData(response.data.data);
        setIsLoading(prev => false);
        console.log(response.data.data)
      })
    .catch(error => {
        notify("An error occured with getting reservations", true, false)
        console.log("An error occured with fetching data")
      })
  }
  useEffect(() => {
    fetchData(); 
  }, [])
  return (
    <>
      <section className="mt-7 flex flex-col items-start justify-start gap-3">
        <h1 className="text-lg font-medium tracking-tight">Your Reservation Dates</h1>
        <div className="flex items-center py-4 minimal-scrollbar justify-start gap-6 max-w-full w-full overflow-x-auto">
          { isLoading ? "Loading" 
          :
          (
          reservationData && reservationData.map((item) => (
            <ReservationItem key={item.id} itemData={item} fetchFunc={fetchData}/>
          ))
          ) }
          { (!isLoading && reservationData?.length == 0) && <p className="text-md font-medium opacity-60 mt-0">You have no reservation dates booked.</p> }
        </div>
      </section>
    </>
  )
}

export default ReservationList
