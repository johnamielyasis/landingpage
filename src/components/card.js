import React from 'react';
import FindOutMore from './findout';

export default function Card(
  {
    image, title, description, buttonText, path
  }
) {
  return (
    <div className="flex">
      <div className="flex-initial w-24 h-24">
        <img src={image} />
      </div>
      <div className="flex-1">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <FindOutMore path={path} />
      </div>
    </div>
  )
}
