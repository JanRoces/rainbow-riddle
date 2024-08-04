import React, { useState } from 'react';
import Logo from './components/Logo';
import ColorSelection from './components/ColorSelection';
import GameGrid from './components/GameGrid';
import SecretCode from './components/SecretCode';
import ActionButton from './components/ActionButton';
import Popup from './components/Popup';
import { COLORS } from './utils/colors';
import './App.css';

function App() {
  const [secret, setSecret] = useState(getSecretCombination());
  const [input, setInput] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [colorGrid, setColorGrid] = useState([]);
  const [resultGrid, setResultGrid] = useState([]);
  const [status, setStatus] = useState('');
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const props = { colorGrid, currentRow, input, resultGrid, secret, status };
  const callBacks = { setColorGrid, setCurrentRow, setInput, setResultGrid };

  if (status === '' && currentRow > 0) {
    const index = currentRow - 1;
    const correct = resultGrid[index].correctPosition;

    if (resultGrid && correct === 5) {
      setStatus('win');
    } else if (currentRow === 8) {
      setStatus('lose');
    }
  }

  function getSecretCombination() {
    const maxInputLenth = 5;
    const secretColors = [];

    for (let i = 0; i < maxInputLenth; i++) {
      const randomIndex = Math.floor(Math.random() * COLORS.length);
      const randomColor = COLORS[randomIndex];

      secretColors.push(randomColor);
    }

    return secretColors;
  }

  function playAgain() {
    setSecret(getSecretCombination());
    setInput([]);
    setCurrentRow(0);
    setColorGrid([]);
    setResultGrid([]);
    setStatus('');
  }

  function renderSelectionOrSecret() {
    return status ? (
      <SecretCode secret={secret} />
    ) : (
      <ColorSelection {...props} {...callBacks} />
    );
  }

  function renderPlayAgainButton() {
    return status !== '' ? (
      <div className="container-button">
        <ActionButton label="Play Again" type="play" onPlayAgain={playAgain} />
      </div>
    ) : (
      ''
    );
  }

  function renderPopup() {
    return showHowToPlay ? (
      <div className="container-popup">
        <Popup
          showHowToPlay={showHowToPlay}
          onSetShowHowToPlay={setShowHowToPlay}
        />
      </div>
    ) : (
      ''
    );
  }

  return (
    <div>
      {renderPopup()}
      <Logo
        message={status}
        showHowToPlay={showHowToPlay}
        onSetShowHowToPlay={setShowHowToPlay}
      />
      <GameGrid {...props} />
      {renderSelectionOrSecret()}
      {renderPlayAgainButton()}
    </div>
  );
}

export default App;
