import React from 'react';

function ColorSquare({ hex = '' }) {
  const borderColor = '#3A3A3C';

  return (
    <div
      className="color-square"
      style={{
        backgroundColor: hex,
        border: hex === '' ? '1px solid ' + borderColor : '1px solid ' + hex,
      }}
    ></div>
  );
}

export default ColorSquare;
