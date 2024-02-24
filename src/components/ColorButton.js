import React from 'react';
import '../styles/ColorButton.css';

function ColorButton({ hex, name, symbol, onSelectColor }) {
  function selectColor(name) {
    onSelectColor(name);
  }

  return (
    <button
      className="button-color"
      style={{ backgroundColor: hex }}
      onClick={() => selectColor(name)}
    >
      {symbol}
    </button>
  );
}

export default ColorButton;
