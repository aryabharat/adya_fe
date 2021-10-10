import React, { useState } from 'react';

import './RockpaperScissors.css';
import { choiceOptions, game } from '../Game/Game';
import Choices from '../Choice/Choice';
import Scoreboard from '../Scoreboard/Scoreboard';
import  Result  from '../Result/Result';
import  SaveGame  from '../SaveGame/SaveGame';


function RockPaperScissors() {
  const [gameStatus, setGameStatus] = useState({
    wins: 0,
    losses: 0,
    status: 'win',
    player: 'Rock',
    computer: 'Paper'
  });

  const onChoiceClick = (choice) => {
    const result = game(choice);
    const updatedGameStatus = { ...gameStatus };
    updatedGameStatus.status = result.status;

    switch (result.status) {
      case 'win':
        updatedGameStatus.wins += 1;
        break;
      case 'lose':
        updatedGameStatus.losses += 1;
        break;
      default:
        break;
    }
    updatedGameStatus.player = result.userChoice;
    updatedGameStatus.computer = result.computerChoice;

    setGameStatus({ ...updatedGameStatus, ...{ player: result.userChoice, computer: result.computerChoice } });

    return result;
  };

  const handleSubmit = () => {
    setGameStatus({
      wins: 0,
      losses: 0,
      status: 'win',
      player: 'Rock',
      computer: 'Paper'
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <Scoreboard score={gameStatus}  />
      <Result gameStatus={gameStatus} />
      <Choices choices={choiceOptions} onClick={onChoiceClick} />
      <p>Make your move!</p>
      <SaveGame score={gameStatus} onChange={handleSubmit} ></SaveGame>
    </div>
  );
}

export default RockPaperScissors;
