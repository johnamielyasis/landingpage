import React, { useState } from 'react';
import SignUp from './signup';
import EventCard from './eventcard';
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../atoms';

const events = {
  August: [
    {
      image: 'image of event',
      date: 'stringDate',
      title: 'title of event',
      type: 'type of event',
      tags: ['tags', 'of', 'event']
    },
    {},
    {},
  ],
  September: [
    {
      image: 'image of event',
      date: 'stringDate',
      title: 'title of event',
      type: 'type of event',
      tags: ['tags', 'of', 'event']
    },
  ],
  October: [
    {
      image: 'image of event',
      date: 'stringDate',
      title: 'title of event',
      type: 'type of event',
      tags: ['tags', 'of', 'event']
    },
  ],
}

export default function Events() {
  const { primaryColor } = useRecoilValue(settingsAtom);
  const months = Object.keys(events);
  const [activeMonth, setActiveMonth] = useState(months[0]);

  return (
    <div className="container grid sm:grid-cols-1 md:grid-cols-8 mx-auto my-4 font-sans">
      <div className="col-span-2 flex flex-col justify-center">
        {
          months.map((month) => (
            <h3
              className={`mx-4 cursor-pointer hover:text-${primaryColor}-200 ${activeMonth === month ? `text-${primaryColor}-400`: 'text-gray-400'}`}
              onClick={() => setActiveMonth(month)}
            >
              {month}
            </h3>
          ))
        }
      </div>
      <div className="col-span-6 flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {events[activeMonth].map((event) => <EventCard { ...event }/>)}
        </div>
      </div>
      <div className="col-span-8">
        <SignUp />
      </div>
    </div>
  )
}