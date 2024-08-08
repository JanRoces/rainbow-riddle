import React from 'react';
import { BarChart } from '@mui/x-charts';
import { COLORS_VIBRANT } from '../utils/colors';
import '../styles/Popup.css';

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

    const [dataLabels, dataValues] = totalTries.reduce(
      (acc, [key, value]) => {
        acc[0].push(key);
        acc[1].push(value);
        return acc;
      },
      [[], []]
    );

    const colorFills = COLORS_VIBRANT.map((c) => {
      return c.name;
    });

    colorFills.push('white');

    return (
      <div>
        <div className="popup-header">
          <div>Total Games Played: {totalGamesPlayed}</div>
          <div>Total Losses: {loses}</div>
        </div>
        <div className="container-bar-chart">
          <BarChart
            className="bar-chart"
            xAxis={[
              {
                scaleType: 'band',
                data: dataLabels,
                colorMap: {
                  type: 'ordinal',
                  values: dataLabels,
                  colors: colorFills,
                },
              },
            ]}
            series={[{ data: dataValues }]}
            tooltip={{ trigger: 'none' }}
            borderRadius={10}
            barLabel={(item) => {
              return item.value;
            }}
            axisHighlight={{
              x: 'none',
              y: 'none',
            }}
            sx={{
              '& .MuiChartsAxis-line': {
                display: 'none',
              },
              '& .MuiChartsAxis-tick': {
                display: 'none',
              },
              '& .MuiChartsAxis-tickLabel': {
                stroke: 'white',
              },
              '& .MuiBarLabel-root': {
                stroke: '#202124',
              },
              '& .MuiChartsAxis-left': {
                display: 'none',
              },
              '& .MuiPopper-root': {
                display: 'none',
              },
            }}
          />
        </div>
        <div className="popup-footer">Number of Tries</div>
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
