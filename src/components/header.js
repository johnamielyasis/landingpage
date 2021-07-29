import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
      <nav className="relative flex flex-wrap lg:flex-row items-center justify-between px-2 py-3 bg-green-500 mb-3 font-sans"
      role="navigation"
      >
        <div className="flex items-center bg-white lg:flex-row rounded-xl h-12">
          <div className="flex relative px-3 pr-4"> {/* this is home page */}
            <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
            <Link to="/"><h1 className="nav-item inline px-1 text-base font-extrabold">
              Student Union
            </h1>
            </Link>
            <button className="px-3 md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/   svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div className="flex relative lg:flex flex-grow items-center m-auto px-2 justify-between font-medium">
            {/* <ul className="flex flex-col list-none lg:ml-auto lg:flex-row bg-yellow-500 items-center">
              <li className="px-3 nav-item flex items-center">
                <a className="flex items-center">
                  <span className="ml-2">Cultural Graduation</span>
                </a>
              </li>
              <li className="px-3 nav-item">Events</li>
              <li className="px-3 nav-item">About</li>
              <li className="px-3 nav-item">Departments</li>
              <li className="px-3 nav-item">Photos</li>
              <li className="px-3 nav-item">Employment</li>
            </ul> */}
            <Link to="/events/" className="px-3 nav-item">Events</Link>
            <Link to="/about/" className="px-3 nav-item">About</Link>
            <Link to="/departments/" className="px-3 nav-item">Departments</Link>
            <Link to="/photos/" className="px-3 nav-item">Photos</Link>
            <Link to="/employment/" className="px-3 nav-item">Employment</Link>
          </div>
        </div>
        <div> {/* for contact us */}
          <span className="flex">
            <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            <a className="font-extrabold text-yellow-300 px-3">
            Contact Us
            </a>
          </span>
        </div>
      </nav>
  )
}