import React from "react";

export default function Settings() {
  return (
    <div className="flex">
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      <a href="#Settings" className="font-extrabold text-black hover:text-yellow-400 px-3">
        Edit Me!
      </a>
    </div>
  )
}