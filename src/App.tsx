import React, {useState} from 'react';
import './App.css';
import PlayingField from "./components/PlayingField/PlayingField";
import {Cell} from "./types";

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
    });
    setPlayingCells(playingCellsCopy);
  }

  const createField = () => {
    return <PlayingField playingCells={playingCells} openCell={openCell}/>;
  }

  return (
    <div className="App">
      {createField()}
    </div>
  );
}

export default App;
