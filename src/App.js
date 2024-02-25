import React, { useState } from 'react';
import Logo from './components/Logo';
import ColorSelection from './components/ColorSelection';
import GameGrid from './components/GameGrid';
import './App.css';

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
