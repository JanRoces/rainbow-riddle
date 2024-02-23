import React from 'react';
import ColorButton from './ColorButton';
import { COLORS } from '../utils/colors';
import '../styles/ColorSelect.css';

function ColorSelection() {
  function renderButtons() {
    const buttons = [];

    COLORS.forEach((color) => {
      buttons.push(<ColorButton {...color} key={color.name} />);
    });

    return buttons;
  }

  return <div className="container-selection">{renderButtons()}</div>;
}

export default ColorSelection;
