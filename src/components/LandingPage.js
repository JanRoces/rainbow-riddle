import React from 'react';
import Logo from './Logo';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="container-landing-page">
      <div className="welcome-text">Welcome to</div>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
}

export default LandingPage;
