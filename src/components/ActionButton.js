import { useMediaQuery } from '@mui/material';
import React from 'react';

function ActionButton({
  label,
  type,
  onDeleteColor,
  onEnterInput,
  onPlayAgain,
  onPlay,
}) {
  const isMobile = useMediaQuery('(max-width:768px)');

  function handleOnClick() {
    switch (type) {
      case 'delete':
        return onDeleteColor();
      case 'enter':
        return onEnterInput();
      case 'play-again':
        return onPlayAgain();
      case 'play':
        return onPlay();
      default:
        break;
    }
  }

  return (
    <button
      className={`button-action-${type}${isMobile ? ' button-mobile' : ''}`}
      onClick={() => handleOnClick()}
    >
      {label}
    </button>
  );
}

export default ActionButton;
