import React, { useEffect } from 'react';
import ColorButton from './ColorButton';
import ActionButton from './ActionButton';
import { COLORS } from '../utils/colors';
import '../styles/ColorSelect.css';

function ColorSelection({
  colorGrid,
  currentRow,
  input,
  resultGrid,
  secret,
  setColorGrid,
  setCurrentRow,
  setInput,
  setResultGrid,
}) {
  const maxInputLenth = 5;

  function selectColor(symbol) {
    const letter = symbol.toUpperCase();
    const color = COLORS.find((color) => color.symbol === letter);

    if (color && input.length !== maxInputLenth) {
      setInput([...input, color]);
    }
  }

  function deleteColor() {
    const len = input.length;

    if (len) {
      const inputCopy = [...input];
      inputCopy.splice(len - 1, 1);
      setInput(inputCopy);
    }
  }

  function getColorCounts() {
    const inputCount = {};
    const secretCount = {};

    input.forEach((color) => {
      const { name } = color;
      inputCount[name] = (inputCount[name] || 0) + 1;
    });

    secret.forEach((color) => {
      const { name } = color;
      secretCount[name] = (secretCount[name] || 0) + 1;
    });

    return {
      inputCount,
      secretCount,
    };
  }

  function checkColors() {
    const result = {
      correctPosition: 0,
      correctColor: 0,
    };

    const { inputCount, secretCount } = getColorCounts();

    input.forEach((inputColor, index) => {
      const { name } = inputColor;

      if (inputColor === secret[index]) {
        if (secretCount[name] <= 0) {
          result.correctColor--;
        }

        result.correctPosition++;
        secretCount[name]--;
      } else {
        secret.forEach((secretColor) => {
          if (
            inputColor === secretColor &&
            secretCount[name] > 0 &&
            inputCount[name] > 0
          ) {
            result.correctColor++;
            secretCount[name]--;
            inputCount[name]--;
          }
        });
      }
    });

    return result;
  }

  function enterColors() {
    if (input.length === maxInputLenth && currentRow < 8) {
      const result = checkColors();

      setColorGrid([...colorGrid, input]);
      setResultGrid([...resultGrid, result]);
      setCurrentRow(currentRow + 1);
      setInput([]);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyInput = e.key;

      switch (keyInput) {
        case 'Backspace':
          deleteColor();
          break;
        case 'Enter':
          enterColors();
          break;
        default:
          selectColor(keyInput);
          break;
      }
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

    buttons.push(
      <div className="group" key="group-1">
        {buttonGroup(0, 4)}
      </div>
    );
    buttons.push(
      <div className="group" key="group-2">
        {buttonGroup(4, len)}
      </div>
    );

    return buttons;
  }

  return (
    <div className="key-board">
      <div className="container-selection">{renderButtons()}</div>
      <div className="container-action-buttons">
        <ActionButton label="Del" type="delete" onDeleteColor={deleteColor} />
        <ActionButton label="Enter" type="enter" onEnterInput={enterColors} />
      </div>
    </div>
  );
}

export default ColorSelection;
