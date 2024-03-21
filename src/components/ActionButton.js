import React from 'react';

function ActionButton({
  label,
  type,
  onDeleteColor,
  onEnterInput,
  onPlayAgain,
}) {
  function handleOnClick() {
    switch (type) {
      case 'delete':
        return onDeleteColor();
      case 'enter':
        return onEnterInput();
      case 'play':
        return onPlayAgain();
      default:
        break;
    }
  }

  return (
    <button className={'button-action-' + type} onClick={() => handleOnClick()}>
      {label}
    </button>
  );
}

export default ActionButton;
