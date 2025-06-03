import React from 'react';
import '../styles/SecretCode.css';
import { useMediaQuery } from '@mui/material';

function SecretCode({ secret }) {
  const colors = [];
  const isMobile = useMediaQuery('(max-width:768px)');

  secret.forEach(({ hex, name }, index) => {
    colors.push(
      <div
        className={`color${isMobile ? '-mobile' : ''}`}
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
