import React, { useEffect, useState } from 'react';
import ColorButton from './ColorButton';
import { COLORS } from '../utils/colors';
import '../styles/ColorSelect.css';

function ColorSelection({ input, setInput }) {
  const maxInputLenth = 5;

  function selectColor(symbol) {
    const letter = symbol.toUpperCase();
    const color = COLORS.find((color) => color.symbol === letter);

    if (color && input.length !== maxInputLenth) {
      setInput([...input, color]);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      selectColor(e.key);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

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
