import React from 'react';
import '../styles/Logo.css';
import { COLORS } from '../utils/colors';

function Logo({ message, showHowToPlay, onToggleShowHowToPlay }) {
  function togglePopupVisability() {
    onToggleShowHowToPlay(!showHowToPlay);
  }

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
    const string = 'You Win!';
    const title = [];
    let index = 0;

    string.split('').forEach((letter) => {
      if (letter !== ' ') {
        const color = COLORS[index];

        title.push(
          <span key={color.name} style={{ color: color.hex }}>
            {letter}
          </span>
        );

        index++;
      } else {
        title.push(letter);
      }
    });

    return title;
  }

  function renderLose() {
    return <span style={{ color: 'white' }}>You Lose!</span>;
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

  function renderHowToPlayIcon() {
    return (
      <span onClick={() => togglePopupVisability()}>
        <i className="fa-solid fa-circle-question"></i>
      </span>
    );
  }

  function renderStatsIcon() {
    return (
      <span>
        <i className="fa-solid fa-chart-pie"></i>
      </span>
    );
  }

  return (
    <div className="container-header">
      <span className="container-icon">{renderHowToPlayIcon()}</span>
      <span className="container-logo">{renderTitle()}</span>
      <span className="container-icon">{renderStatsIcon()}</span>
    </div>
  );
}

export default Logo;
