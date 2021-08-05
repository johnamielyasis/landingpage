import React, { useState } from 'react';
import SignUp from './signup';
import EventCard from './eventcard';
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../atoms';
import Workout from './undraw/workout';
import Dumbbell from './undraw/dumbbell';
import PersonalTrainer from './undraw/personaltrainer';
import IndoorBike from './undraw/indoorbike';
import Gaming from './undraw/gaming';

const events = {
  August: [
    {
      image: <Workout />,
      date: 'TUE, Aug. 3 @ 4PM',
      title: 'HIIT with Kyla',
      type: 'Recreation',
      tags: ['tags', 'of', 'event']
    },
    {
      image: <Dumbbell />,
      date: 'FRI, Aug. 6 @ 5PM',
      title: 'Free Weights with John',
      type: 'Workout',
      tags: ['fitness', 'exercise', 'strength']
    },
    {
      image: <IndoorBike />,
      date: 'FRI, Aug. 6 @ 5PM',
      title: 'Spin Class with Neil',
      type: 'Cardio',
      tags: ['fitness', 'exercise', 'self care']
    },
  ],
  September: [
    {
      image: <PersonalTrainer />,
      date: 'TUE, Sep. 21 @ 5PM',
      title: 'Personal Training with Caleb',
      type: 'Workout',
      tags: ['fitness', 'exercise', 'self care']
    },
  ],
  October: [
    {
      image: <Gaming />,
      date: 'FRI, Oct. 15 @ 5PM',
      title: 'Super Smash Bros. Tournament',
      type: 'Recreation',
      tags: ['fighting game', 'video game', 'tournament']
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
              className={`mx-4 cursor-pointer hover:text-${primaryColor}-200 ${activeMonth === month ? `text-${primaryColor}-400` : 'text-gray-400'}`}
              onClick={() => setActiveMonth(month)}
            >
              {month}
            </h3>
          ))
        }
      </div>
      <div className="col-span-6 flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {events[activeMonth].map((event) => <EventCard {...event} />)}
        </div>
      </div>
      <div className="col-span-8">
        <SignUp />
      </div>
    </div>
  )
}