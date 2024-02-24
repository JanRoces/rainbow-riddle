import React from 'react';

function ColorSquare({ hex = 'none', input }) {
  const borderColor = '#3A3A3C';

  return (
    <div
      className="color-square"
      style={{
        backgroundColor: hex,
        border:
          hex === 'none' ? '1px solid ' + borderColor : '1px solid ' + hex,
      }}
    ></div>
  );
}

export default ColorSquare;
