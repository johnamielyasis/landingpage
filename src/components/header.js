import React, { useState } from "react";
import PropTypes from "prop-types";
import SingleLink from "./singleLink.js";
import { Link } from "gatsby";
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../atoms';
import background from "../images/lockers.jpg";
import Settings from "./settings";

export default function Header() {
  const { primaryColor, smSpace, mdSpace, lgSpace } = useRecoilValue(settingsAtom);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = (e) => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <div className="container mx-auto w-full bg-auto font-sans bg-bottom bg-no-repeat" style={{ backgroundImage: `url(https://www.calstatelausu.org/_assets/Department%20Cover%20Image/special-pages-cover/about.png)`, height: '500px'}} >
      <nav className={`container fixed mx-auto flex lg:flex-row items-center justify-between px-${smSpace} pt-${smSpace} pb-${lgSpace} mb-${mdSpace} align-top pb-${smSpace}`} role="navigation" style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 65%, rgba(255,255,255,0))'
      }}>
        <div className="flex items-center bg-black lg:flex-row rounded-xl h-12 shadow-md">
          <div className={`flex relative px-${smSpace} pr-${mdSpace} whitespace-nowrap`}>
            <Link to="/" className={`hover:text-${primaryColor}-400`}>
              <svg className={`inline pb-${smSpace} w-6 h-6 text-${primaryColor}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              <h1 className={`nav-item inline px-${smSpace} text-base font-extrabold text-${primaryColor}-400`}>
                Student Union
              </h1>
            </Link>
            <button className={`px-${smSpace} md:hidden`} onClick={() => handleHamburger()}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/   svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div className={`text-white md:block md:flex-row flex-grow items-center m-auto px-${smSpace} justify-between font-medium` + (hamburgerOpen ? " flex flex-col rounded-xl" : " hidden")}>
            <SingleLink hamburgerOpen={hamburgerOpen} />
          </div>
        </div>
        <div>
          <Settings />
        </div>
      </nav>
    </div>
  )
}