import React from 'react';
import '../styles/LandingPage.css';
import { COLORS_VIBRANT } from '../utils/colors';
import ActionButton from './ActionButton';

function LandingPage({ onPlay }) {
  function renderTitle() {
    return <span>RainbowRiddle</span>;
  }

  function renderSquares() {
    const squares = [];
    const bounceDuration = 0.6;
    const colorsLength = COLORS_VIBRANT.length;
    const animationDelay = bounceDuration / colorsLength;

    COLORS_VIBRANT.forEach((color, index) => {
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

  return (
    <div className="container-landing-page">
      <div className="welcome-text">Welcome to</div>
      <div className="logo">{renderTitle()}</div>
      <div className="container-squares">{renderSquares()}</div>
      <ActionButton label="Play" type="play" onClick={onPlay} />
    </div>
  );
}

export default LandingPage;
