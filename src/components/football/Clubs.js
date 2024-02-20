import React, { useEffect, useState} from 'react'
import {RotatingLines} from 'react-loader-spinner'
import Team from './Team';

export default function Clubs() {
    const [isLoading, setIsLoading] = useState(true);
    const [club, setClub] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then(
            (res) => res.json().then((data) => {
                setClub(data);
               setIsLoading(false);
            })
        );
    }, [])


    if (isLoading) return (
        <div className='w-full h-screen flex'>
            <div className='relativ text-3xl text-[#DEF5FF] ml-6 mt-6'>Clubs</div>
            <div className=' p-12'></div>
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
        );

    return (
        <div className='w-full'>
            <div className='relativ text-3xl text-[#DEF5FF] ml-6 mt-6'>Clubs</div>
            <div className=' p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {club.map((team) => {
                    return <Team teamIconUrl={team.teamIconUrl} teamName={team.teamName} />
                })}

            </div>
            </div>
        </div>
    )
}
