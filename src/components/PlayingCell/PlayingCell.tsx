import React from 'react';
import './PlayingCell.css';
import {Cell} from "../../types";

interface Props {
  cell: Cell;
  onClickHandler: React.MouseEventHandler;
}

const PlayingCell: React.FC<Props> = (props) => {
  if (props.cell.hasDiamond) {
    return (
      <div className="cell" onClick={props.onClickHandler}>
        <div className={props.cell.clicked? "diamond_visible" : "playing_cell"}>
        </div>
        <img className="diamond" src="https://img.icons8.com/stickers/344/sparkling-diamond.png" alt="Diamond"/>
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