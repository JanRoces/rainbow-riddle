import React, { useState } from 'react';
import Popup, { POPUP_TYPE } from './Popup';
import AnimatedSquares from './AnimatedSquares';
import { COLORS_VIBRANT, COLORS_PASTEL } from '../utils/colors';
import '../styles/Popup.css';

const COLOR_MODES = [
  { key: 'vibrant', label: 'vibrant', colors: COLORS_VIBRANT },
  { key: 'pastel', label: 'pastel', colors: COLORS_PASTEL },
];

function PopupSettings({ showSettings, toggleShowSettings }) {
  const [colorMode, setColorMode] = useState(
    () => localStorage.getItem('colorMode') || 'vibrant',
  );

  function getIconClass(modeKey) {
    return `fa-solid ${colorMode === modeKey ? 'fa-toggle-on' : 'fa-toggle-off'}`;
  }

  function toggleColorMode(newColorMode) {
    setColorMode(newColorMode);
    localStorage.setItem('colorMode', newColorMode);
  }

  function togglePopup() {
    toggleShowSettings(!showSettings);
  }

  function renderToggleGroup(mode) {
    return (
      <div className="container-toggle-group" key={mode.key}>
        <div className="container-toggle-text-and-squares">
          <div className="container-toggle-text">{mode.label}</div>
          <AnimatedSquares colors={mode.colors} />
        </div>
        <div className="container-toggle-icon">
          <i
            className={getIconClass(mode.key)}
            onClick={() => toggleColorMode(mode.key)}
          ></i>
        </div>
      </div>
    );
  }

  function renderContent() {
    return <div>{COLOR_MODES.map(mode => renderToggleGroup(mode))}</div>;
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
