import React from 'react';
import Popup, { POPUP_TYPE } from './Popup';
import '../styles/Popup.css';

function PopupSettings({ showSettings, toggleShowSettings }) {
  function togglePopup() {
    toggleShowSettings(!showSettings);
  }

  function renderContent() {
    return <div>Settings Popup</div>;
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
