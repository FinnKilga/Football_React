import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='sticky top-0 w-full bg-[#171C1C] w-full text-[#DEF5FF] text-lg'>
      <div className='flex'>
        <div className='m-2 mr-40 text-3xl'><b>Bundes</b>Liga</div>
        <div className='flex gap-5 items-center'>
          <Link to="/Table" className='hover:text-[#4DB4FF]'>Table</Link>
          <Link to="/Clubs" className='hover:text-[#4DB4FF]'>Clubs</Link>
        </div>
      </div>
    </div>
  )
}
