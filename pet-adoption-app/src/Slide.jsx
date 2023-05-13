import React from 'react';
import './Slide.css';

const Slide = ({ imgSrc, altText, heading, text, buttonText, buttonLink, isActive, handleButtonClick }) => {
  return (
    <div className={`slide ${isActive ? 'active-slide' : ''}`}>
      <img src={imgSrc} className="slide__img" alt={altText} />
      <div className="carousel-caption">
        <p className="carousel-heading">{heading}</p>
        <p className="carousel-text">{text}</p>
        <button className="carousel-button" onClick={() => handleButtonClick(buttonLink)}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Slide;
