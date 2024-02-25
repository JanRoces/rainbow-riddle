import React from 'react';

function ActionButton({ label, onDeleteColor }) {
  return (
    <button className="button-action" onClick={() => onDeleteColor()}>
      {label}
    </button>
  );
}

export default ActionButton;
