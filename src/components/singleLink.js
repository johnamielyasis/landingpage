import React from 'react';
import { Link } from 'gatsby';

export default function SingleLink(hamburgerOpen) {
  const navItemsArray = ['Events', 'About', 'Departments', 'Photos', 'Employment'];
  const navItems = navItemsArray.map((arrayItem) => {
    return <Link to={`/${arrayItem.toLowerCase()}/`} className="px-3 nav-item hover:bg-yellow-300">{`${arrayItem}`}</Link>
  }
  )

  return (
    <div>
      {navItems}
    </div>
  )
}