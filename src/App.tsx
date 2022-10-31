import React, {useState} from 'react';
import './App.css';
import PlayingField from "./components/PlayingField/PlayingField";
import {Cell} from "./types";
import ResetButton from "./components/ResetButton/ResetButton";
import AttemptsCounter from "./components/AttemptsCounter/AttemptsCounter";

const createPlayingField = () => {
  const playingCells: Cell[] = [];
  const randomCell: number = Math.floor(Math.random() * 37);

  for (let i = 0; i < 36; i++) {
    const playingCell: Cell = {hasDiamond:false, clicked:false, id: 0};
    playingCell.id = i;
    if (i === randomCell) {
      playingCell.hasDiamond = true;
    }
    playingCells.push(playingCell);
  }

  return playingCells;
}

function App() {
  const [playingCells, setPlayingCells] = useState(createPlayingField());
  const [attemptCounter, setCounter] = useState({counter:0});

  const openCell = (id: number) => {
    const playingCellsCopy = [...playingCells];
    playingCellsCopy.map(cell => {
      if(cell.id === id) {
        cell.clicked = true;
      }
      return cell;
    });
    setPlayingCells(playingCellsCopy);
    increaseCounter();
  }

  const increaseCounter = () => {
    const playingCellsCopy = [...playingCells];
    const counterCopy = {...attemptCounter};
    counterCopy.counter = 0;

    playingCellsCopy.forEach(cell => {
      if (cell.clicked) {
        counterCopy.counter++;
      }
    });

    setCounter(counterCopy);
  }

  const createField = () => {
    return <PlayingField playingCells={playingCells} openCell={openCell}/>;
  }

  const resetGame = () => {
    setPlayingCells(createPlayingField);
    const attemptCounterCopy = {...attemptCounter};
    attemptCounterCopy.counter = 0;
    setCounter(attemptCounterCopy);
  }

  return (
    <div className="App">
      {createField()}
      <AttemptsCounter counter={attemptCounter.counter}/>
      <ResetButton onClickHandler={resetGame}/>
    </div>
  );
}

export default App;
