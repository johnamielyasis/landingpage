import React from 'react';
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../atoms';

export default function EventCard({ image, date, title, type, tags }) {
  const { primaryColor, smSpace, mdSpace } = useRecoilValue(settingsAtom);

  return (
    <div className={`container flex-col border-4 border-${primaryColor}-400 px-${mdSpace} py-${smSpace} rounded-lg shadow-md`}>
      <p className={`text-${primaryColor}-400 font-semibold underline my-2`}>
        {date}
      </p>
      <div className="py-2">
      {image}
      </div>
      <h3 className="my-4 pt-2">
        {title}
      </h3>
      <p>
        {type}
      </p>
    </div>
  )
}