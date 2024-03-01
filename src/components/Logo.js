import React from 'react';
import '../styles/Logo.css';
import { COLORS } from '../utils/colors';

function Logo({ message }) {
  function renderLogo() {
    const string = 'Rainbow';
    const title = [];

    string.split('').forEach((letter, index) => {
      const color = COLORS[index];

      title.push(
        <span key={color.name} style={{ color: color.hex }}>
          {letter}
        </span>
      );
    });

    title.push(
      <span key={'riddle'} style={{ color: 'white' }}>
        Riddle
      </span>
    );

    return title;
  }

  function renderWin() {
    const string = 'You Win';
    const title = [];

    string.split('').forEach((letter, index) => {
      const color = COLORS[index];

      title.push(
        <span key={color.name} style={{ color: color.hex }}>
          {letter}
        </span>
      );
    });

    return title;
  }

  function renderLose() {
    return <span style={{ color: 'white' }}>You Lose</span>;
  }

  function renderTitle() {
    switch (message) {
      case 'win':
        return renderWin();
      case 'lose':
        return renderLose();
      default:
        return renderLogo();
    }
  }

  return <div className="container-logo">{renderTitle()}</div>;
}

export default Logo;
