import React from 'react';
import Popup, { POPUP_TYPE } from './Popup';
import '../styles/Popup.css';
import AnimatedSquares from './AnimatedSquares';
import { COLORS_VIBRANT, COLORS_PASTEL } from '../utils/colors';

function PopupSettings({ showSettings, toggleShowSettings }) {
  function togglePopup() {
    toggleShowSettings(!showSettings);
  }

  function renderContent() {
    return (
      <div>
        <div className="container-toggle-group">
          <div className="container-toggle-text-and-squares">
            <div className="container-toggle-text">Vibrant</div>
            <AnimatedSquares colors={COLORS_VIBRANT} />
          </div>
          <div className="container-toggle-icon">
            <i className="fa-solid fa-toggle-on"></i>
          </div>
        </div>
        <div className="container-toggle-group">
          <div className="container-toggle-text-and-squares">
            <div className="container-toggle-text">Pastel</div>
            <AnimatedSquares colors={COLORS_PASTEL} />
          </div>
          <div className="container-toggle-icon">
            <i className="fa-solid fa-toggle-off"></i>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Popup
      type={POPUP_TYPE.SETTINGS}
      onRenderContent={renderContent()}
      onClosePopup={togglePopup}
    />
  );
}

export default PopupSettings;
