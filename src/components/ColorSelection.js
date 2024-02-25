import React, { useEffect } from 'react';
import ColorButton from './ColorButton';
import ActionButton from './ActionButton';
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
    const len = COLORS.length;

    function buttonGroup(start = 0, end = len) {
      const group = [];

      for (let i = start; i < end; i++) {
        const color = COLORS[i];

        group.push(
          <ColorButton
            {...color}
            key={color.name}
            onSelectColor={selectColor}
          />
        );
      }

      return group;
    }

    const buttons = [];

    buttons.push(<div className="group">{buttonGroup(0, 4)}</div>);
    buttons.push(<div className="group">{buttonGroup(4, len)}</div>);

    return buttons;
  }

  return (
    <div className="key-board">
      <div className="container-selection">{renderButtons()}</div>
      <div className="container-action-buttons">
        <ActionButton label="Del" />
      </div>
    </div>
  );
}

export default ColorSelection;
