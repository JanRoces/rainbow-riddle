import React from 'react';
import { useMediaQuery } from '@mui/material';

function ColorSquare({ hex = '' }) {
  const borderColor = '#3A3A3C';
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div
      className={isMobile ? 'color-square-mobile' : 'color-square'}
      style={{
        backgroundColor: hex,
        border: hex === '' ? '1px solid ' + borderColor : '1px solid ' + hex,
      }}
    ></div>
  );
}

export default ColorSquare;
