import React from 'react';
import './EndGameModalWindow.css';
import ResetButton from "../ResetButton/ResetButton";

interface EndGameModalWindowProps {
  status: string;
  startNewGame: () => void;
}


const EndGameModalWindow: React.FC<EndGameModalWindowProps> = (props) => {
  return (
    <div className={props.status === "finished"? "game_finished" : "game_active"}>
      <span>Game over</span>
      <ResetButton onClickHandler={props.startNewGame} name={"New Game"}/>
    </div>
  );
};

export default EndGameModalWindow;