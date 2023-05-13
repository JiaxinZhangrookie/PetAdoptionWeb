import './About.css';
import React, { useState } from 'react';
import AboutBanner from './AboutBanner';
import seattleImage from './images/seattle.jpg'; 
import bostonImage from './images/boston.jpg'; 

const About = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleAccordion();
      e.preventDefault();
    }
  };

  return (
    <div className="about-page">
      <AboutBanner />
      <div className="about-accordion">
        <div 
        className="about-accordion__header" 
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        tabIndex="0"
        role="button"
        aria-expanded={isAccordionOpen} 
        >
          <h2 className="about-accordion__heading">Contact Us </h2>
          <span>{isAccordionOpen ? '▲' : '▼'}</span>
        </div>
        {isAccordionOpen && (
          <div className="about-accordion__content">
            <div className="about-accordion__card">
              <h2 className="card-heading">Seattle</h2>
              <img src={seattleImage} alt="Seattle" className="card-image" />
              <p className="card-content">
                Phone: (123) 456-7890<br />
                Email: seattle@adoptapaw.org<br />
                Address: 1234 Paw Street, Seattle, USA<br />
              </p>
            </div>

            <div className="about-accordion__card">
              <h2 className="card-heading">Boston</h2>
              <img src={bostonImage} alt="Boston" className="card-image" />
              <p className="card-content">
                Phone: (098) 765-4321<br />
                Email: boston@adoptapaw.org<br />
                Address: 5678 Paw Avenue, Boston, USA<br />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;