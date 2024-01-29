import React, { useEffect, useState } from 'react'
import Matches from "./Matches"
import Menu from './Menu';


export default function Table() {
  const [table, setTable] = useState([]);


  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then(
      (res) => res.json().then((data) => {
        setTable(data);
      })
    );
  }, [])


//<div className='fixed'><Menu /></div>
  return (
    <div className=''>

      <div className='text-2xl relativ mt-16 mr-10 text-[#DEF5FF]'>Tabelle</div>


      <div className='mt-5'>
        {table.map(match => {
          return <Matches teamIconUrl={match.teamIconUrl} teamName={match.teamName} matches={match.matches} won={match.won} draw={match.draw} lost={match.lost} goal={match.goal} goalDiff={match.goalDiff} points={match.points} />
        })}
      </div>



    </div>
  )
}
