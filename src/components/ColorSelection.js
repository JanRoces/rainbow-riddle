import React from 'react';
import ColorButton from './ColorButton';
import { COLORS } from '../utils/colors';
import '../styles/ColorSelect.css';

function ColorSelection({ input, setInput }) {
  const maxInputLenth = 5;

  function selectColor(name) {
    if (input.length !== maxInputLenth) {
      const color = COLORS.find((color) => color.name === name);

      return setInput([...input, color]);
    }
  }

  function renderButtons() {
    const buttons = [];

    COLORS.forEach((color) => {
      buttons.push(
        <ColorButton {...color} key={color.name} onSelectColor={selectColor} />
      );
    });

    return buttons;
  }

  return <div className="container-selection">{renderButtons()}</div>;
}

export default ColorSelection;
