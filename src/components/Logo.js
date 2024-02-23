import React from 'react';
import '../styles/Logo.css';
import { COLORS } from '../utils/colors';

function Logo() {
  function renderTitle() {
    const string = 'Rainbow';
    const title = [];

    string.split('').forEach((letter, index) => {
      const color = COLORS[index];

      title.push(
        <span key={color.name} style={{ color: color.hex }}>
          {letter}
        </span>
      );
    });

    title.push(
      <span key={'riddle'} style={{ color: 'white' }}>
        Riddle
      </span>
    );

    return title;
  }

  return <div className="container-logo">{renderTitle()}</div>;
}

export default Logo;
