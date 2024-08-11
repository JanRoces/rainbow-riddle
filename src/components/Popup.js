import React from 'react';
import '../styles/Popup.css';

export const POPUP_TYPE = {
  HOW_TO_PLAY: 'How to Play',
  WIN_STATS: 'Win Statistics',
};

function Popup({ type, onRenderContent, onClosePopup }) {
  function renderTitle() {
    return <div className="title">{type}</div>;
  }

  function renderCloseIcon() {
    return (
      <div className="container-icon-close">
        <i
          className="fa-solid fa-square-xmark"
          onClick={() => onClosePopup()}
        ></i>
      </div>
    );
  }

  function renderContent() {
    return onRenderContent;
  }

  return (
    <div className="popup">
      {renderCloseIcon()}
      {renderTitle()}
      {renderContent()}
    </div>
  );
}

export default Popup;
