import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='sticky top-0 w-full bg-[#171C1C] w-full text-[#DEF5FF] text-lg'>
      <div className='flex'>
        <div className='m-2 mr-40 text-3xl'><b>Bundes</b>Liga</div>
        <div className='flex gap-5 items-center'>
          <NavLink
            to="/Table"
            className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
            Table
          </NavLink>
          <NavLink
            to="/Clubs"
            className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
            Clubs
          </NavLink>
        </div>
      </div>
    </div>
  )
}
