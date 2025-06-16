import React from 'react';
import Logo from './Logo';
import '../styles/Header.css';
import { COLORS_VIBRANT } from '../utils/colors';
import { POPUP_TYPE } from './Popup';

function Header({
  message,
  showHowToPlay,
  showWinStats,
  onToggleShowHowToPlay,
  onToggleShowWinStats,
}) {
  function togglePopupVisability(popupType) {
    const isHowToPlay = popupType === POPUP_TYPE.HOW_TO_PLAY;

    if (isHowToPlay && showWinStats) {
      onToggleShowWinStats(false);
    } else if (!isHowToPlay && showHowToPlay) {
      onToggleShowHowToPlay(false);
    }

    if (isHowToPlay) {
      onToggleShowHowToPlay(!showHowToPlay);
    } else {
      onToggleShowWinStats(!showWinStats);
    }
  }

  function renderLogo() {
    const string = 'Rainbow';
    const title = [];

    string.split('').forEach((letter, index) => {
      const color = COLORS_VIBRANT[index];

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
        const color = COLORS_VIBRANT[index];

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
      <span onClick={() => togglePopupVisability(POPUP_TYPE.HOW_TO_PLAY)}>
        <i className="fa-solid fa-circle-question"></i>
      </span>
    );
  }

  function renderStatsIcon() {
    return (
      <span onClick={() => togglePopupVisability(POPUP_TYPE.WIN_STATS)}>
        <i className="fa-solid fa-chart-simple"></i>
      </span>
    );
  }

  return (
    <div className="container-header">
      <span className="container-icon">{renderHowToPlayIcon()}</span>
      <span className="container-logo">
        <Logo />
      </span>
      <span className="container-icon">{renderStatsIcon()}</span>
    </div>
  );
}

export default Header;
