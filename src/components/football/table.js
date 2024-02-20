import React, { useEffect, useState } from 'react'
import {RotatingLines} from 'react-loader-spinner'
import Matches from './Matches';

export default function Table() {
  const [isLoading, setIsLoading] = useState(true);
  const [table, setTable] = useState([]);


  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then(
      (res) => res.json().then((data) => {
        setTable(data);
        setIsLoading(false);
      })
    );
  }, [])


  if (isLoading) return (
    <div className='h-screen flex'>
      <div className='relativ text-3xl text-[#DEF5FF] ml-6 mt-6'>Tabelle</div>
      <div className='relativ mt-32 justify-self-center'>
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        /></div>
    </div>
  )




  return (
    <div className='w-full pb-8'>
      <div className='relativ text-3xl text-[#DEF5FF] ml-6 mt-6'>Tabelle</div>
      <div className='mt-5 ml-24 text-[#DEF5FF]'>
        <div className='flex h-[30] w-3/4 mb-3 items-center justify-between text-lg'>
          <div className='flex gap-4 items-center'>
            <div className='ml-5 mr-16'>Platz</div>
            <div>Name</div>
          </div>
          <div className='flex gap-4 mr-6 hidden md:flex'>
            <div className='w-5'>Sp</div>
            <div className='w-5'>S</div>
            <div className='w-5'>U</div>
            <div className='w-5'>N</div>
            <div className='w-5'>T</div>
            <div className='w-5'>D</div>
            <div className='w-5'>P</div>
          </div>
        </div>
        {table.map((match, index) => {
          const place = index + 1;
          return <Matches place={place} teamIconUrl={match.teamIconUrl} teamName={match.teamName} matches={match.matches} won={match.won} draw={match.draw} lost={match.lost} goal={match.goal} goalDiff={match.goalDiff} points={match.points} />
        })}
      </div>

      <div className='text-[#DEF5FF] ml-14 mt-8 hidden md:flex flex-col'>Legende:
        <div>Sp: Spiele</div>
        <div>S: Siege</div>
        <div>U: Unentschieden</div>
        <div>N: Niederlagen</div>
        <div>T: Tore</div>
        <div>D: Differenz</div>
        <div>P: Punkte</div>
      </div>












    </div>
  )
}
