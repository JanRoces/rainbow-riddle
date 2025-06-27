import React from 'react';
import '../styles/LandingPage.css';
import { COLORS_VIBRANT } from '../utils/colors';
import ActionButton from './ActionButton';
import AnimatedSquares from './AnimatedSquares';

function LandingPage({ onPlay }) {
  function renderTitle() {
    return <span>RainbowRiddle</span>;
  }

  return (
    <div className="container-landing-page">
      <div className="welcome-text">Welcome to</div>
      <div className="logo">{renderTitle()}</div>
      <AnimatedSquares colors={COLORS_VIBRANT} />
      <ActionButton label="Play" type="play" onClick={onPlay} />
    </div>
  );
}

export default LandingPage;
