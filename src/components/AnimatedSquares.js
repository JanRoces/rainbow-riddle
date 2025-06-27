import React from 'react';
import '../styles/AnimatedSquares.css';

function AnimatedSquares({ colors }) {
  function renderSquares() {
    const squares = [];
    const bounceDuration = 0.6;
    const colorsLength = colors.length;
    const animationDelay = bounceDuration / colorsLength;

    colors.forEach((color, index) => {
      squares.push(
        <div
          key={index}
          className="square"
          style={{
            backgroundColor: color.hex,
            animationDelay: `${index * animationDelay}s`,
          }}
        ></div>,
      );
    });

    return squares;
  }

  return <div className="container-squares">{renderSquares()}</div>;
}

export default AnimatedSquares;
