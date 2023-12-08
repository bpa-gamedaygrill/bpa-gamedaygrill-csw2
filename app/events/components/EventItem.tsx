import React from 'react'
import Image from 'next/image';
import { EventItemInterface } from './EventResults'

import { Calendar } from 'react-feather';

interface EventItemComponentInterface {
  itemData: EventItemInterface;
}

const EventItem: React.FC<EventItemComponentInterface> = ({ itemData }) => {
  const dateObject: Date = new Date(itemData.eventDate);
  const year: number = dateObject.getFullYear();
  const month: number = dateObject.getMonth() + 1;
  const day: number = dateObject.getDate();
  const humanReadableDate: string = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  return (
      <div className={`flex items-center flex-col sm:flex-row gap-0 sm:gap-12 relative w-full`}>
        <div className="w-full relative sm:w-[50%] h-full min-h-[120px] rounded-lg bg-neutral-200">
        <Image
          src={itemData.imageUrl}
          alt={itemData.eventName}
          layout='fill'
          className='rounded-lg object-cover'
        />
      </div>
        <div className="flex flex-col h-full items-start justify-evenly gap-3 py-3 min-h-[120px] w-full sm:w-[50%]">
          <h1 className="text-2xl opacity-90 text-neutral-700 tracking-tight font-semibold">{itemData.eventName}</h1>
          <p className="text-sm opacity-40 text-neutral-700 tracking-tight font-medium">{itemData.eventDescription}</p>
          <div className="flex gap-2 items-center justify-center">
            <Calendar
            opacity={0.4}
            size={18}
            />
            <p className="text-sm opacity-50 font-medium">{humanReadableDate}</p>
          </div>
        </div>
      </div>
  )
}

export default EventItem
