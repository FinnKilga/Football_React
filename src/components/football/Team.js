import React from 'react'

export default function Team({ teamIconUrl, teamName }) {
    return (
        <div className='bg-[#4DB4FF] flex rounded-lg p-1.5 items-center text-[#DEF5FF]'>
            <div>
                <img src={teamIconUrl} alt='Clublogo' className='h-32 mr-3'></img>
            </div>
            <div className='text-2xl'>{teamName}</div>
        </div>
    )
}
