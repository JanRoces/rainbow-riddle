import React from 'react';
import '../styles/Popup.css';

const TITLE = 'How to Play';

function Popup({ showHowToPlay, onSetShowHowToPlay }) {
  function togglePopupVisability() {
    onSetShowHowToPlay(!showHowToPlay);
  }

  function renderDescription() {
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
      <div
        className="container-icon-close"
        onClick={() => togglePopupVisability()}
      >
        <i className="fa-solid fa-square-xmark"></i>
      </div>
    );
  }

  return (
    <div className="popup">
      {renderCloseIcon()}
      <div className="title">{TITLE}</div>
      {renderDescription()}
    </div>
  );
}

export default Popup;
