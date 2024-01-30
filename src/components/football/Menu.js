import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='sticky top-0 w-full bg-[#171C1C] w-full text-[#DEF5FF] text-lg'>
      <div className='flex'>
        <div className='m-2 mr-40 text-3xl'>Bundesliga</div>
        <div className='flex gap-5 items-center'>
          <Link to="/Table">Table</Link>
          <Link to="/Clubs">Clubs</Link>
        </div>
      </div>
    </div>
  )
}
