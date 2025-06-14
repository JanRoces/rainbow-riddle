import React from 'react';
import '../styles/Footer.css';
import { POPUP_TYPE } from './Popup';

function Footer({
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
    <div className="container-footer">
      <span className="container-icon">{renderHowToPlayIcon()}</span>
      <span className="container-icon">{renderStatsIcon()}</span>
    </div>
  );
}

export default Footer;
