import React from 'react';
import '../styles/ColorButton.css';

function ColorButton({ hex, symbol }) {
  return (
    <button className="button-color" style={{ backgroundColor: hex }}>
      {symbol}
    </button>
  );
}

export default ColorButton;
