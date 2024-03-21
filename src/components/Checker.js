import React from 'react';
import {
  EMPTY_RESULT_COLOR,
  EMPTY_RESULT_OUTLINE_COLOR,
} from '../utils/colors';

function Checker({ correctPosition, correctColor }) {
  const defaultColors = Array(5).fill({
    fill: EMPTY_RESULT_COLOR,
    outline: EMPTY_RESULT_OUTLINE_COLOR,
  });

  let pos = correctPosition;
  let col = correctColor;

  const circleColors = defaultColors.map((color) => {
    if (pos) {
      pos--;
      return {
        fill: 'black',
        outline: 'black',
      };
    } else if (col) {
      col--;
      return {
        fill: 'white',
        outline: 'white',
      };
    }

    return color;
  });

  function setStyle(index) {
    const color = circleColors[index];
    return {
      backgroundColor: color.fill,
      border: `1px solid ${color.outline}`,
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
