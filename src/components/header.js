import React, { useState } from "react";
import PropTypes from "prop-types";
import SingleLink from "./singleLink.js";
import { Link } from "gatsby";
import background from "../images/lockers.jpg";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = (e) => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <>
      <nav className="relative flex lg:flex-row items-center justify-between px-2 py-3 mb-5 align-top"
        role="navigation"
      >
        <div className="flex items-center bg-white lg:flex-row rounded-xl h-12 shadow-md">
          <div className="flex relative px-3 pr-4 whitespace-nowrap hover:bg-yellow-300 hover:text-black">
            <Link to="/">
              <svg className="inline pb-1 w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              <h1 className="nav-item inline px-1 text-base font-extrabold">
                Student Union
              </h1>
            </Link>
            <button className="px-3 md:hidden" onClick={() => handleHamburger()}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/   svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div className={"bg-white md:block md:flex-row flex-grow items-center m-auto px-2 justify-between font-medium" + (hamburgerOpen ? " flex flex-col rounded-xl" : " hidden")}>
            <SingleLink hamburgerOpen={hamburgerOpen} />
          </div>
        </div>
        <div>
          <Link to="/contact/">
            <span className="flex">
              <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <span className="font-extrabold text-yellow-300 px-3">
                Contact Us
              </span>
            </span>
          </Link>
        </div>
      </nav>
      <div className="grid grid-cols-2 mt-12 pt-12">
        <div className="grid justify-items-center pt-2 pl-5">
          <h1 className="font-extrabold drop-shadow-md">Student <br />
              Union <br />
              Hour
          </h1>
        </div>
        <div className="grid justify-items-center pt-2 pl-12">
          <p>
            How's it feel to be <br />
            at the center of magic <br />
            to linger in tones <br />
            and words?
          </p>
          <button className="bg-yellow-400 text-white rounded-xl px-5 py-2 font-semibold shadow-md">
            Contact Us!
          </button>
        </div>
      </div>
    </>
  )
}