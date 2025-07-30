import React from 'react';
import '../styles/LandingPage.css';
import { getColorMode } from '../utils/colors';
import ActionButton from './ActionButton';
import AnimatedSquares from './AnimatedSquares';

function LandingPage({ onPlay }) {
  const colorMode = getColorMode();

  function renderTitle() {
    return <span>RainbowRiddle</span>;
  }

  return (
    <div className="container-landing-page">
      <div className="welcome-text">Welcome to</div>
      <div className="logo">{renderTitle()}</div>
      <div className="container-animated-squares">
        <AnimatedSquares colors={colorMode} />
      </div>
      <ActionButton label="Play" type="play" onClick={onPlay} />
    </div>
  );
}

export default LandingPage;
