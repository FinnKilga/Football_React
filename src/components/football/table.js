import React, { useEffect, useState } from 'react'


export default function Table() {
  const [table, setTable] = useState([]);


  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then(
      (res) => res.json().then((data) => {
        setTable(data);
      })
    );
  }, [])



  return (
    <div className='fixed bg-[#171C1C] w-full text-[#DEF5FF] text-lg'>

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
