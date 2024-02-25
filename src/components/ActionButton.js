import React from 'react';

function ActionButton({ label, type, onDeleteColor }) {
  function handleOnClick() {
    return type === 'delete' ? onDeleteColor() : () => {};
  }

  return (
    <button className={'button-action-' + type} onClick={() => handleOnClick()}>
      {label}
    </button>
  );
}

export default ActionButton;
