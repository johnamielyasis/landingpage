import React from 'react';
import { Link } from 'gatsby';

export default function SingleLink(hamburgerOpen) {
  const navItemsArray = ['Events', 'About', 'Departments', 'Photos', 'Employment'];
  const navItems = navItemsArray.map((arrayItem) => {
    return (
      <Link
      to={`/${arrayItem.toLowerCase()}/`}
      className="px-3 nav-item hover:text-yellow-300"
      key={arrayItem}
    >
      {`${arrayItem}`}
    </Link>
    )
  }
  )

  return (
    <div>
      {navItems}
    </div>
  )
}