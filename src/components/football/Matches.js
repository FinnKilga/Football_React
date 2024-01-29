import React from 'react'



export default function Matches({ teamIconUrl, teamName, matches, won, draw, lost, goal, goalDiff, points }) {
    return (

        <div className='flex h-[30] bg-[#4DB4FF] mb-3'>
            <div className='flex'>
                <div>Platzierung</div>
                <img src={teamIconUrl} alt="Logo des Clubs" className='h-12'></img>
                <div>{teamName}</div>
            </div>
            <div className='flex'>
                <div>{matches}</div>
                <div>{won}</div>
                <div>{draw}</div>
                <div>{lost}</div>
                <div>{goal}</div>
                <div>{goalDiff}</div>
                <div>{points}</div>
            </div>

        </div>

    )
}
