import React from 'react';
import './NavButton.css';


const NavButton = ({ slideNumber, isActive, onClick }) => {
  return (
    <button
      className={`slider__navlink ${isActive ? 'active' : ''}`}
      onClick={() => onClick(slideNumber)}
    ></button>
  );
};

export default NavButton;
