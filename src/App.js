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

function App() {
  const [input, setInput] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [colorGrid, setColorGrid] = useState([]);

  const props = { colorGrid, currentRow, input };
  const callBacks = { setColorGrid, setCurrentRow, setInput };

  return (
    <div>
      <Logo />
      <GameGrid {...props} />
      <ColorSelection {...props} {...callBacks} />
    </div>
  );
}

export default App;
