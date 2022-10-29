import React from 'react';
import './ResetButton.css';

interface ResetButtonProps {
  onClickHandler: React.MouseEventHandler;
}

const ResetButton: React.FC<ResetButtonProps> = (props) => {
  return (
    <div>
      <button type="submit" className="reset_btn" onClick={props.onClickHandler}>Reset</button>
    </div>
  );
};

export default ResetButton;