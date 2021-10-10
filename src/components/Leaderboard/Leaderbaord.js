import axios from "axios";
import React, { useEffect, useState } from "react";
const BASE_URL = 'http://localhost:3003/api/leaderboard'

function Leaderbaord() {

    const [leaderboard, setleaderboard] = useState()

  useEffect(()=>{
    axios.get(BASE_URL).then(data => {
      setleaderboard(data.data.map(d => (<li key={d._id}> {d.username} | {d.score} </li>)))
  })
  },[])

  return (
    <div className="App">
      <header>
        <h1>Leaderbaord</h1>
      </header>
      <ol>
        {leaderboard}
      </ol>
    </div>
  );
}

export default Leaderbaord;
