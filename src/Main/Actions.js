import React from 'react';
import './Actions.css';

const Actions = ({ onNextImage }) => {
  return (
    <div className="actions-container">
      <img
        src="/images/action1.png"
        alt="Next Image"
        className="action-icon"
        onClick={onNextImage} // Call the next image function
        style={{ cursor: 'pointer' }}
      />
      <img src="/images/action2.png" alt="Action 2" className="action-icon" />
      <img src="/images/action3.png" alt="Action 3" className="action-icon" />
    </div>
  );
};

export default Actions;
