import React from 'react';

function ColorButton({ hex, symbol, isMobile, onSelectColor }) {
  return (
    <button
      className={`button-color${isMobile ? '-mobile' : ''}`}
      style={{ backgroundColor: hex }}
      onClick={() => onSelectColor(symbol)}
    >
      {!isMobile ? symbol : ''}
    </button>
  );
}

export default ColorButton;
