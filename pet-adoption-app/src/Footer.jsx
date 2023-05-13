import React from 'react';
import './Footer.css';
import logoPic from './images/logo_dark.jpg';

function Footer({ setPage }) { // Destructure setPage from props
  const handleNavigationClick = (targetPage) => {
    setPage(targetPage);
  };

  return (
    <footer className="footer">
      <img
        src={logoPic}
        className="footer__logo"
        alt="Adpot a paw Logo"
      />
      <h2 className="footer__title">Adopt a paw</h2>
      <ul className="footer__place-list">
        <li className="footer__place-item">
          <p className="footer__place-link">
            Seattle
          </p>
        </li>
        <li className="footer__place-item">
          <p className="footer__place-link">
            Boston
          </p>
        </li>
      </ul>

      <ul className="footer__link-list">
        <li className="footer__link-item">
          <a className="footer__link-link" onClick={() => handleNavigationClick('Adopt')}>
            Adopt
          </a>
        </li>
        <li className="footer__link-item">
          <a className="footer__link-link" onClick={() => handleNavigationClick('Donate')}>
            Donate
          </a>
        </li>
        <li className="footer__link-item">
          <a className="footer__link-link" onClick={() => handleNavigationClick('Volunteer')}>
            Volunteer
          </a>
        </li>
      </ul>
      <ul className="footer__social-list">
        <li className="footer__social-item">
          <a className="footer__social-link" href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
        </li>
        <li className="footer__social-item">
          <a className="footer__social-link" href="https://www.instagram.com/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
