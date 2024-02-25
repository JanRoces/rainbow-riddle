import React from 'react';
import '../styles/ColorButton.css';

function ColorButton({ hex, symbol, onSelectColor }) {
  function selectColor(colorSymbol) {
    onSelectColor(colorSymbol);
  }

  return (
    <button
      className="button-color"
      style={{ backgroundColor: hex }}
      onClick={() => selectColor(symbol)}
    >
      {symbol}
    </button>
  );
}

export default ColorButton;
