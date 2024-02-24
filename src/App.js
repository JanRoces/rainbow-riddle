import React from 'react';
import Logo from './components/Logo';
import ColorSelection from './components/ColorSelection';
import './App.css';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <div>
      <Logo />
      <GameGrid />
      <ColorSelection />
    </div>
  );
}

export default App;
