import React from 'react';
import Popup, { POPUP_TYPE } from './Popup';
import '../styles/Popup.css';

function PopupHowToPlay({ showHowToPlay, toggleShowHowToPlay }) {
  function togglePopup() {
    toggleShowHowToPlay(!showHowToPlay);
  }

  function renderContent() {
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

  return (
    <Popup
      type={POPUP_TYPE.HOW_TO_PLAY}
      onRenderContent={renderContent()}
      onClosePopup={togglePopup}
    />
  );
}

export default PopupHowToPlay;
