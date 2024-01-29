import React from 'react'

export default function Menu() {
  return (
    <div className='fixed top-0 bg-[#171C1C] w-full text-[#DEF5FF] text-lg'>
      <div className='flex'>
        <div className='m-2 mr-40 text-3xl'>Bundesliga</div>
        <div className='flex gap-5 items-center'>
          <div>Link Table</div>
          <div>Link Clubs</div>
        </div>
      </div>
    </div>
  )
}
