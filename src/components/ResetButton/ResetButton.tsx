import React from 'react';
import './ResetButton.css';

interface ResetButtonProps {
  name: string;
  onClickHandler: React.MouseEventHandler;
}

const ResetButton: React.FC<ResetButtonProps> = (props) => {
  return (
    <div>
      <button type="submit" className="reset_btn" onClick={props.onClickHandler}>{props.name}</button>
    </div>
  );
};

export default ResetButton;