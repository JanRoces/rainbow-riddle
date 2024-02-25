import React from 'react';

function ActionButton({ label, type, onDeleteColor, onEnterInput }) {
  function handleOnClick() {
    return type === 'delete' ? onDeleteColor() : onEnterInput();
  }

  return (
    <button className={'button-action-' + type} onClick={() => handleOnClick()}>
      {label}
    </button>
  );
}

export default ActionButton;
