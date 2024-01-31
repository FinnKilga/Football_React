import React, { useEffect, useState } from 'react'
import Team from './Team';

export default function Clubs() {

    const [club, setClub] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then(
            (res) => res.json().then((data) => {
                setClub(data);
            })
        );
    }, [])


    return (
        <div className='w-full'>
            <div className='relativ text-3xl text-[#DEF5FF] ml-6 mt-6'>Clubs</div>
            <div className=' p-12'>
            <div className='grid grid-cols-3 gap-14'>
                {club.map((team) => {
                    return <Team teamIconUrl={team.teamIconUrl} teamName={team.teamName} />
                })}

            </div>
            </div>
        </div>
    )
}
