import React, { useState } from 'react';
import Logo from './components/Logo';
import ColorSelection from './components/ColorSelection';
import './App.css';
import GameGrid from './components/GameGrid';

function App() {
  const [input, setInput] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  const props = { currentRow, input };
  const callBacks = { setInput };

  return (
    <div>
      <Logo />
      <GameGrid {...props} />
      <ColorSelection {...props} {...callBacks} />
    </div>
  );
}

export default App;
