import React from 'react';
import './AttemptsCounter.css';

interface AttemptsCounterProps {
  counter: number;
}

const AttemptsCounter: React.FC<AttemptsCounterProps> = (props) => {
  return (
    <div>
      <span>{props.counter} attempts.</span>
    </div>
  );
};

export default AttemptsCounter;