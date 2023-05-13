import React from 'react';
import './Header.css';
import GlobalNav from './GlobalNav';
import logoPic from './images/logo_pic.jpg';

function Header({ setPage }) {
  const handleLogoClick = () => {
    setPage('Home');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleLogoClick();
      event.preventDefault(); 
    }
  };

  return (
    <header className="header">
      <img
        src={logoPic}
        className="header__logo"
        alt="Adopt a Paw Logo"
        onClick={handleLogoClick}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        aria-label="Go to Home"
      />
      <a class="skip-to-content-link" href="#main">Skip to content</a>
      <h1 className="header__title">
        Adopt a Paw
      </h1>
      <GlobalNav className="header__nav" setPage={setPage} />
    </header>
  );
}


export default Header;
