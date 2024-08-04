import React from 'react';
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
        break;
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
