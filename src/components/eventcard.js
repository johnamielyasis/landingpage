import React from 'react';
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../atoms';
import workout from '../images/workout.svg';
import Workout from './undraw/workout.js';

export default function EventCard() {
  const { primaryColor, smSpace, mdSpace } = useRecoilValue(settingsAtom);

  return (
    <div className={`container flex-col border-4 border-${primaryColor}-400 px-${mdSpace} py-${smSpace} rounded-lg shadow-md`}>
      <p className={`text-${primaryColor}-400 font-bold underline`}>
        Tuesday, August 3, 4 PM
      </p>
      <img src={workout} />
      <h3>
        HIIT with Kyler
      </h3>
      <p>
        Recreation
      </p>
    </div>
  )
}