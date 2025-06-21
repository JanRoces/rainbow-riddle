import { useMediaQuery } from '@mui/material';
import React from 'react';

function ActionButton({ label, type, onClick, disabled }) {
  const isMobile = useMediaQuery('(max-width:768px)');

  function handleOnClick() {
    return onClick();
  }

  function getClassName() {
    return `button-action-${type}${isMobile ? ' button-mobile' : ''}${disabled ? ' disabled' : ''}`;
  }

  return (
    <button
      className={getClassName()}
      onClick={() => handleOnClick()}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ActionButton;
