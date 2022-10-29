import React from 'react';
import PlayingCell from "../PlayingCell/PlayingCell";
import './PlayingField.css';

const PlayingField = () => {
  return (
    <div className="playing_field">
      <PlayingCell/>
    </div>
  );
};

export default PlayingField;