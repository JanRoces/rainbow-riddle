import React from 'react';
import '../styles/Popup.css';
import { PieChart } from '@mui/x-charts';
import { COLORS } from '../utils/colors';

export const POPUP_TYPE = {
  HOW_TO_PLAY: 'How to Play',
  WIN_STATS: 'Win Statistics',
};

function Popup({ popup, toggleShowHowToPlay, toggleShowWinStats }) {
  function closePopup() {
    switch (popup) {
      case POPUP_TYPE.HOW_TO_PLAY:
        toggleShowHowToPlay(false);
        break;
      case POPUP_TYPE.WIN_STATS:
        toggleShowWinStats(false);
        break;
      default:
        return;
    }
  }

  function renderHowToPlayDescription() {
    return (
      <div className="description">
        Welcome to <b>Rainbow Riddle!</b>
        <br />
        <div>
          The objective of the game is to guess a secret{' '}
          <b>five-color combination</b>&nbsp;within 8 attempts. The secret
          combination is composed of five colors, and colors may repeat.
        </div>
        <br />
        <div>
          A Black Dot &nbsp;
          <span className="dot-black"></span>
          &nbsp; Indicates that one of your colors is correct and in the correct
          position.
        </div>
        <br />
        <div>
          A White Dot &nbsp;
          <span className="dot-white"></span>
          &nbsp; Indicates that one of your colors is correct but in the wrong
          position.
        </div>
      </div>
    );
  }

  function renderWinStats() {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || {
      totalGamesPlayed: 0,
      tries: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
      loses: 0,
    };

    const { totalGamesPlayed, loses, tries } = gameStats;
    const totalTries = Object.entries(tries);
    const data = totalTries.map((item, index) => {
      const color = index === 0 ? 'white' : COLORS[index - 1].name;
      console.log('color', color);

      return {
        label: item[0],
        value: item[1],
        color,
      };
    });

    const sizing = {
      height: 200,
      width: 200,
    };

    return (
      <div>
        <div className="games-overview">
          <span>Total Games Played: {totalGamesPlayed}</span>
          <span>Total Loses: {loses}</span>
        </div>
        <div>
          <PieChart
            series={[
              {
                data,
              },
            ]}
            {...sizing}
          />
        </div>
      </div>
    );
  }

  function renderCloseIcon() {
    return (
      <div className="container-icon-close" onClick={() => closePopup()}>
        <i className="fa-solid fa-square-xmark"></i>
      </div>
    );
  }

  function renderTitle() {
    return <div className="title">{popup}</div>;
  }

  function renderPopupContent() {
    switch (popup) {
      case POPUP_TYPE.HOW_TO_PLAY:
        return renderHowToPlayDescription();
      case POPUP_TYPE.WIN_STATS:
        return renderWinStats();
      default:
        return;
    }
  }

  return (
    <div className="popup">
      {renderCloseIcon()}
      {renderTitle()}
      {renderPopupContent()}
    </div>
  );
}

export default Popup;
