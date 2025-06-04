import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Footer from './components/Footer';
import ColorSelection from './components/ColorSelection';
import GameGrid from './components/GameGrid';
import SecretCode from './components/SecretCode';
import ActionButton from './components/ActionButton';
import PopupHowToPlay from './components/PopupHowToPlay';
import PopupWinStats from './components/PopupWinStats.js';
import { setGameStats } from './utils/stats';
import { useMediaQuery } from '@mui/material';
import { COLORS_VIBRANT } from './utils/colors';
import { POPUP_TYPE } from './components/Popup';
import './App.css';
import './styles/Popup.css';

function App() {
  const [secret, setSecret] = useState(getSecretCombination());
  const [input, setInput] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [colorGrid, setColorGrid] = useState([]);
  const [resultGrid, setResultGrid] = useState([]);
  const [status, setStatus] = useState('');
  const [showHowToPlay, toggleShowHowToPlay] = useState(false);
  const [showWinStats, toggleShowWinStats] = useState(false);

  const props = { colorGrid, currentRow, input, resultGrid, secret, status };
  const callBacks = { setColorGrid, setCurrentRow, setInput, setResultGrid };
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    if (status !== '') {
      setGameStats(status, currentRow);
    }
  }, [status]);

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
      const randomIndex = Math.floor(Math.random() * COLORS_VIBRANT.length);
      const randomColor = COLORS_VIBRANT[randomIndex];

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
      <SecretCode secret={secret} status={status} />
    ) : (
      <ColorSelection {...props} {...callBacks} />
    );
  }

  function renderPlayAgainButton() {
    return status !== '' ? (
      <div className="container-button">
        <ActionButton
          label="Play Again"
          type="play-again"
          onPlayAgain={playAgain}
        />
      </div>
    ) : (
      ''
    );
  }

  function renderPopup() {
    let popup = '';

    if (showHowToPlay) {
      popup = POPUP_TYPE.HOW_TO_PLAY;
    } else if (showWinStats) {
      popup = POPUP_TYPE.WIN_STATS;
    }

    switch (popup) {
      case POPUP_TYPE.HOW_TO_PLAY:
        return (
          <div className="container-popup">
            <PopupHowToPlay
              showHowToPlay={showHowToPlay}
              toggleShowHowToPlay={toggleShowHowToPlay}
            />
          </div>
        );
      case POPUP_TYPE.WIN_STATS:
        return (
          <div className="container-popup">
            <PopupWinStats
              showWinStats={showWinStats}
              toggleShowWinStats={toggleShowWinStats}
            />
          </div>
        );
      default:
        return '';
    }
  }

  function renderLogo() {
    return !isMobile ? (
      <Logo
        message={status}
        showHowToPlay={showHowToPlay}
        showWinStats={showWinStats}
        onToggleShowHowToPlay={toggleShowHowToPlay}
        onToggleShowWinStats={toggleShowWinStats}
      />
    ) : (
      ''
    );
  }

  function renderFooter() {
    return isMobile ? (
      <Footer
        showHowToPlay={showHowToPlay}
        showWinStats={showWinStats}
        onToggleShowHowToPlay={toggleShowHowToPlay}
        onToggleShowWinStats={toggleShowWinStats}
      />
    ) : (
      ''
    );
  }

  function renderGame() {
    return (
      <div className="container-game">
        <GameGrid {...props} />
        {renderSelectionOrSecret()}
        {renderPlayAgainButton()}
      </div>
    );
  }

  return (
    <div>
      {renderPopup()}
      {renderLogo()}
      <div className="container-game-and-footer">
        {renderGame()}
        {renderFooter()}
      </div>
    </div>
  );
}

export default App;
