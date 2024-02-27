import React from 'react';

function Checker({ correctPosition, correctColor }) {
  const defaultColors = ['none', 'none', 'none', 'none', 'none'];

  let pos = correctPosition;
  let col = correctColor;

  const circleColors = defaultColors.map((color) => {
    if (pos) {
      pos--;
      return 'black';
    } else if (col) {
      col--;
      return 'white';
    }

    return color;
  });

  function setStyle(index) {
    const color = circleColors[index];
    return {
      backgroundColor: color,
      border: '1px solid ' + color,
    };
  }

  return (
    <div className="checker">
      <div className="row-1">
        <div className="dot" style={setStyle(0)}></div>
      </div>
      <div className="row-2">
        <div className="dot" style={setStyle(1)}></div>
        <div className="dot" style={setStyle(2)}></div>
      </div>
      <div className="row-3">
        <div className="dot" style={setStyle(3)}></div>
        <div className="dot" style={setStyle(4)}></div>
      </div>
    </div>
  );
}

export default Checker;
