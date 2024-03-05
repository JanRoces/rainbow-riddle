import React, { useState } from 'react';
import Logo from './components/Logo';
import ColorSelection from './components/ColorSelection';
import GameGrid from './components/GameGrid';
import SecretCode from './components/SecretCode';
import ActionButton from './components/ActionButton';
import { COLORS } from './utils/colors';
import './App.css';

const secret = getSecretCombination();

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

console.log('secret :>> ', secret);

function App() {
  const [input, setInput] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [colorGrid, setColorGrid] = useState([]);
  const [resultGrid, setResultGrid] = useState([]);
  const [status, setStatus] = useState('');

  const props = { colorGrid, currentRow, input, resultGrid, secret, status };
  const callBacks = {
    setColorGrid,
    setCurrentRow,
    setInput,
    setResultGrid,
  };

  if (status === '' && currentRow > 0) {
    const index = currentRow - 1;
    const correct = resultGrid[index].correctPosition;

    if (resultGrid && correct === 5) {
      setStatus('win');
    } else if (currentRow === 8) {
      setStatus('lose');
    }
  }

  function playAgain() {
    console.log('helo worl');
  }

  function renderSelectionOrSecret() {
    return status ? (
      <SecretCode secret={secret} />
    ) : (
      <ColorSelection {...props} {...callBacks} />
    );
  }

  function renderPlayAgainButton() {
    return (
      <ActionButton label="Play Again" type="play" onPlayAgain={playAgain} />
    );
  }

  return (
    <div>
      <Logo message={status} />
      <GameGrid {...props} />
      {renderSelectionOrSecret()}
      {renderPlayAgainButton()}
    </div>
  );
}

export default App;
