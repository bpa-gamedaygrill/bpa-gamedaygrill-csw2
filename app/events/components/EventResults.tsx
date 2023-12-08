"use client";
import EventSkeleton from 'app/components/Skeleton/EventSkeleton'
import React, { useState, useEffect } from 'react'
import EventItem from './EventItem';

import axios from 'axios';

export interface EventItemInterface {
  id: string;
  eventName: string;
  eventDescription: string;
  imageUrl: string;
  eventDate: string;
}

const EventResults = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [eventItems, setEventItems] = useState<EventItemInterface[] | null>([]);
  const fetchEvents = () => {
    const menuItems = axios.get('/api/event/getallevents')
    .then((res) => {
      const eventItemsData = res.data.data;
      setEventItems(prev => eventItemsData)
    })
    .catch(error => {
      console.log(`Fetch Events Error: ${error}`)
    })
    .finally(() => {
      setIsLoading(prev => false);
    })
  }
  useEffect(() => {
    fetchEvents()
  }, [])
  return (
    <>
      <section className="mt-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-12 mb-7 gap-y-14 justify-center items-center">
        {isLoading ? (
          <>
            <EventSkeleton />
            <EventSkeleton />
            <EventSkeleton />
            <EventSkeleton />
            <EventSkeleton customStyles='hidden md:flex' />
            <EventSkeleton customStyles='hidden md:flex' />
          </>
        ) : (
          eventItems && eventItems.map((item) => (
          <>
            <EventItem key={item.id} itemData={item} />
          </>
          ))
        )}
        { (!isLoading && eventItems?.length===0) && <p className="text-neutral-600 font-medium text-lg">No events are taking place soon.</p> }
      </section>
    </>
  )
}

export default EventResults
