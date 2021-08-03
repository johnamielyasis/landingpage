import React from 'react';
import { Link } from 'gatsby';

export default function FindOutMore({ path }) {
  return (
    <div>
      <Link to={`/${path}`}>
        <span className="flex">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          <span className="font-extrabold px-3">
            Find out More
          </span>
        </span>
      </Link>
    </div>
  )
}