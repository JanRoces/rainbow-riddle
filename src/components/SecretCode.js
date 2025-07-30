import React from 'react';
import { convertColorToCurrentMode } from '../utils/colors';
import '../styles/SecretCode.css';
import { useMediaQuery } from '@mui/material';

function SecretCode({ secret, status }) {
  const isMobile = useMediaQuery('(max-width:768px)');

  function renderSecretColors() {
    const colors = [];

    secret.forEach((color, index) => {
      const convertedColor = convertColorToCurrentMode(color);
      const { hex, name } = convertedColor;

      colors.push(
        <div
          className={`color${isMobile ? '-mobile' : ''}`}
          key={name + index}
          style={{ backgroundColor: hex }}
        ></div>,
      );
    });

    return <div className="secret-colors">{colors}</div>;
  }

  function renderLabel() {
    let text;

    if (!isMobile) {
      text = 'Secret Code:';
    } else {
      text = status === 'win' ? 'You Win!' : 'You Lose!';
    }

    return <div className="secret-text">{text}</div>;
  }

  return (
    <div className="container-secret">
      {renderLabel()}
      {renderSecretColors()}
    </div>
  );
}

export default SecretCode;
