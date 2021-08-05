import React from 'react';
import { Link } from 'gatsby';
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../atoms';

export default function SingleLink(hamburgerOpen) {
  const navItemsArray = ['Events', 'About', 'Departments', 'Photos', 'Employment'];
  const { primaryColor, smSpace, mdSpace, lgSpace } = useRecoilValue(settingsAtom);
  const navItems = navItemsArray.map((arrayItem) =>

    <Link
      to={`/${arrayItem.toLowerCase()}/`}
      className={`px-3 nav-item hover:text-${primaryColor}-300`}
      key={arrayItem}
    >
      {`${arrayItem}`}
    </Link>

  )

  return (
    <div>
      {navItems}
    </div>
  )
}