import { useMediaQuery } from '@mui/material';
import React from 'react';

function ActionButton({ label, type, onClick }) {
  const isMobile = useMediaQuery('(max-width:768px)');

  function handleOnClick() {
    return onClick();
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
