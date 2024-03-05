import React from 'react';
import '../styles/SecretCode.css';

function SecretCode({ secret }) {
  const colors = [];

  secret.forEach(({ hex, name }, index) => {
    colors.push(
      <div
        className="color"
        key={name + index}
        style={{ backgroundColor: hex }}
      ></div>
    );
  });

  return (
    <div className="container-secret">
      <div className="secret-text">Secret Code:</div>
      <div className="secret-colors">{colors}</div>
    </div>
  );
}

export default SecretCode;
