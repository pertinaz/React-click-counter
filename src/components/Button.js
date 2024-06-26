import React from 'react';
import '../styleSheets/Button.css';

function Button({ text, clickButton, manageClick }) {
  return (
    <button
      className={clickButton ? 'clicked-button' : 'reset-button'}
      onClick={manageClick}>
      {text}
    </button>
  );
}

export default Button;