import React, { useState } from 'react';
import axios from 'axios';
import './SaveGame.css';
const BASE_URL = 'http://localhost:3003'

async function makeRequest(data){
    var config = {
        method: 'post',
        url: `${BASE_URL}/api/user/`,
        data
      };
     await axios(config);
}


function SaveGame(props) {

    const [username, setUsername] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(username,props.score.wins)
        setUsername('');
        props.onChange();
        makeRequest({username,score:props.score.wins})
      }
  return (
  <form onSubmit={handleSubmit}>
      <input type="text" required value={username} onChange={e => setUsername(e.target.value)} placeholder='username' />
    <input type="submit" value="save score" />
  </form>
  );
}

export default SaveGame;
