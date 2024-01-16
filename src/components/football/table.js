import React, { useEffect, useState } from 'react'
import Games from "./Games"



export default function table() {
const [game, setGame] = useState([]);
  
  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then(
      (res) => res.json().then((data) => {
setGame(data);
      })
    );
  }, []);









  return (
    <div>
      <div className='flex'>Bundeslige</div>
      <div>Tabelle</div>
      <div>Clubs</div>
    </div>
  )
}
