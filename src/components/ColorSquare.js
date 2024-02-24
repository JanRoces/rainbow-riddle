import React from 'react';

function ColorSquare({ hex = 'none' }) {
  const borderColor = '#3A3A3C';

  return (
    <div
      className="color-square"
      style={{
        backgroundColor: hex,
        border: hex === 'none' ? '1px solid ' + borderColor : 'none',
      }}
    ></div>
  );
}

export default ColorSquare;
