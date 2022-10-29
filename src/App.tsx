import React, {useState} from 'react';
import './App.css';
import PlayingField from "./components/PlayingField/PlayingField";
import {Cell} from "./types";
import ResetButton from "./components/ResetButton/ResetButton";

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

  const openCell = (id: number) => {
    const playingCellsCopy = [...playingCells];
    playingCellsCopy.map(cell => {
      if(cell.id === id) {
        cell.clicked = true;
      }
      return cell;
    });
    setPlayingCells(playingCellsCopy);
  }

  const createField = () => {
    return <PlayingField playingCells={playingCells} openCell={openCell}/>;
  }

  const resetGame = () => {
    setPlayingCells(createPlayingField);
  }

  return (
    <div className="App">
      {createField()}
      <ResetButton onClickHandler={resetGame}/>
    </div>
  );
}

export default App;
