import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {
const [people,setPeople] = useState([]);


  useEffect(() => {
    fetch("https://659fe23f5023b02bfe8ab414.mockapi.io/people").then(
      (res) => res.json().then((data) => {
        setPeople(data);
      })
    );
  }, [])

  return (
    <div>
      <h1>People</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {people.map(person => {
          return <Card name={person.name} title={person.jobtitle} imageUrl={person.avatar}/>
        })}
      </div>
    </div>
  )
}
