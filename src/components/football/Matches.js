import React from 'react'



export default function Matches({ place, teamIconUrl, teamName, matches, won, draw, lost, goal, goalDiff, points }) {
    return (

        <div className='flex h-[30] w-3/4 bg-[#4DB4FF] mb-3 rounded-lg items-center justify-between'>
            <div className='flex gap-4 items-center ml-5'>
                <div>{place}</div>
                <img src={teamIconUrl} alt="Logo des Clubs" className='h-12'></img>
                <div>{teamName}</div>
            </div>
            <div className='flex gap-4 mr-6'>
                <div className='w-5'>{matches}</div>
                <div className='w-5'>{won}</div>
                <div className='w-5'>{draw}</div>
                <div className='w-5'>{lost}</div>
                <div className='w-5'>{goal}</div>
                <div className='w-5'>{goalDiff}</div>
                <div className='w-5'>{points}</div>
            </div>
        </div>

    )
}
