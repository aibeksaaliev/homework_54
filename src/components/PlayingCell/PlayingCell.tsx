import React from 'react';
import './PlayingCell.css';
import {Cell} from "../../types";

interface PlayingCellProps {
  cell: Cell;
  onClickHandler: React.MouseEventHandler;
}

const PlayingCell: React.FC<PlayingCellProps> = (props) => {
  if (props.cell.hasDiamond) {
    return (
      <div className="cell" onClick={props.onClickHandler}>
        <div className={props.cell.clicked? "diamond_visible" : "playing_cell"}>
        </div>
        <img className="diamond pulse" src="https://img.icons8.com/stickers/344/sparkling-diamond.png" alt="Diamond"/>
      </div>
    );
  } else {
    return (
      <div className="cell"  onClick={props.onClickHandler}>
        <div className={props.cell.clicked? "diamond_visible" : "playing_cell"}>
        </div>
      </div>
    );
  }
};

export default PlayingCell;