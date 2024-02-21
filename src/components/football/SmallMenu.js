import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

export default function SmallMenu() {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const closeMenu = () => {
        setIsMenuShown(false);
    };

    const getMenu = () => (
        <div className='absolute top-0 left-0 w-screen h-screen bg-[#171C1C] text-[#DEF5FF]'>
            <Bars3Icon className='h-12 rotate-90 fill-[#DEF5FF] cursor-pointer' onClick={closeMenu} />

            <div className='flex flex-col gap-5 items-center'>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}
                onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink
                to="/Table"
                className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}
                onClick={closeMenu}>
                Table
              </NavLink>
              <NavLink
                to="/Clubs"
                className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}
                onClick={closeMenu}>
                Clubs
              </NavLink>
            </div>
        </div>
    );

    return (
        <div>
            <Bars3Icon className='h-12 fill-[#DEF5FF] cursor-pointer' onClick={() => { setIsMenuShown(true) }} />
            {isMenuShown && getMenu()}
        </div>
    );
}
