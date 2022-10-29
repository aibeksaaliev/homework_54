import React from 'react';
import PlayingCell from "../PlayingCell/PlayingCell";
import './PlayingField.css';
import {Cell} from "../../types";

interface Props {
  playingCells: Cell[];
  openCell: (id: number) => void;
}

const PlayingField: React.FC<Props> = (props) => {
  const createCells = props.playingCells.map(cell => {
    return <PlayingCell key={cell.id} cell={cell} onClickHandler={() => props.openCell(cell.id)}/>
  });

  return (
    <div className="playing_field">
      {createCells}
    </div>
  );
};

export default PlayingField;