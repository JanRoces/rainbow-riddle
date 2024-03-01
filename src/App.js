import React, { useState } from 'react';
import Logo from './components/Logo';
import ColorSelection from './components/ColorSelection';
import GameGrid from './components/GameGrid';
import './App.css';
import { COLORS } from './utils/colors';

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

  return (
    <div>
      <Logo message={status} />
      <GameGrid {...props} />
      <ColorSelection {...props} {...callBacks} />
    </div>
  );
}

export default App;
