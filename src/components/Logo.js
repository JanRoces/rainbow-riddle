import React from 'react';
import { COLORS_VIBRANT } from '../utils/colors';

function Logo({ message }) {
  function renderLogo() {
    const string = 'Rainbow';
    const title = [];

    string.split('').forEach((letter, index) => {
      const color = COLORS_VIBRANT[index];

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

  function renderWin() {
    const string = 'You Win!';
    const title = [];
    let index = 0;

    string.split('').forEach((letter) => {
      if (letter !== ' ') {
        const color = COLORS_VIBRANT[index];

        title.push(
          <span key={color.name} style={{ color: color.hex }}>
            {letter}
          </span>
        );

        index++;
      } else {
        title.push(letter);
      }
    });

    return title;
  }

  function renderLose() {
    return <span style={{ color: 'white' }}>You Lose!</span>;
  }

  function renderTitle() {
    switch (message) {
      case 'win':
        return renderWin();
      case 'lose':
        return renderLose();
      default:
        return renderLogo();
    }
  }

  return <div>{renderTitle()}</div>;
}

export default Logo;
