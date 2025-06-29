import React from 'react';
import '../styles/Footer.css';
import { POPUP_TYPE } from './Popup';

function Footer({
  showHowToPlay,
  showWinStats,
  showSettings,
  onToggleShowHowToPlay,
  onToggleShowWinStats,
  onToggleShowSettings,
}) {
  function togglePopupVisibility(popupType) {
    switch (popupType) {
      case POPUP_TYPE.HOW_TO_PLAY:
        onToggleShowHowToPlay(!showHowToPlay);
        break;
      case POPUP_TYPE.WIN_STATS:
        onToggleShowWinStats(!showWinStats);
        break;
      case POPUP_TYPE.SETTINGS:
        onToggleShowSettings(!showSettings);
        break;
      default:
        break;
    }
  }

  function renderHowToPlayIcon() {
    return (
      <span onClick={() => togglePopupVisibility(POPUP_TYPE.HOW_TO_PLAY)}>
        <i className="fa-solid fa-circle-question"></i>
      </span>
    );
  }

  function renderStatsIcon() {
    return (
      <span onClick={() => togglePopupVisibility(POPUP_TYPE.WIN_STATS)}>
        <i className="fa-solid fa-chart-simple"></i>
      </span>
    );
  }

  function renderSettingsIcon() {
    return (
      <span onClick={() => togglePopupVisibility(POPUP_TYPE.SETTINGS)}>
        <i className="fa-solid fa-gear"></i>
      </span>
    );
  }

  return (
    <div className="container-footer">
      <div className="container-icons-left">
        <span className="container-icon">{renderHowToPlayIcon()}</span>
        <span className="container-icon">{renderSettingsIcon()}</span>
      </div>
      <span className="container-icon">{renderStatsIcon()}</span>
    </div>
  );
}

export default Footer;
