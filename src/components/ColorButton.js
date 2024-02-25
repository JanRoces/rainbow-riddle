import React from 'react';

function ColorButton({ hex, symbol, onSelectColor }) {
  return (
    <button
      className="button-color"
      style={{ backgroundColor: hex }}
      onClick={() => onSelectColor(symbol)}
    >
      {symbol}
    </button>
  );
}

export default ColorButton;
