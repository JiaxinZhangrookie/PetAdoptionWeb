import React from 'react';
import './AboutBanner.css';
import bannerImage from './images/banner.jpg'; 

const AboutBanner = () => {
  return (
    <>
      <div className="about-banner">
        <img src={bannerImage} alt="Banner" className="about-banner__image" />
      </div>
      <div className="about-content" id="main">
        <h2 className="about-heading">Who we are</h2>
        <p className="about-text">
          Adopt a Paw is a nonprofit organization dedicated to finding loving homes for
          animals in need. Our mission is to connect people with furry friends and
          provide them with the support they need for a lifetime of companionship.<br />
          <br />
          We believe that every animal deserves a chance at happiness and a safe, nurturing environment. 
          Through our adoption program, we work tirelessly to match each pet with a caring family that will love and cherish them unconditionally.
          From dogs and cats to rabbits and birds, we have a diverse range of animals waiting for their forever homes.<br />
          <br />
          In addition to our adoption services, we are committed to promoting animal welfare and educating 
          the public about responsible pet ownership. Our team provides resources and guidance on topics 
          such as training, nutrition, and healthcare to ensure that our adopted pets thrive in their new homes.<br />
          <br />
          As a nonprofit, we rely on the generosity of our community to continue our life-saving work. 
          Whether you choose to adopt, donate, volunteer, or spread the word, your support makes a 
          difference in the lives of animals in need. Together, we can create a world where every pet 
          is loved, respected, and given the opportunity to lead a fulfilling life..<br />
          <br />
          Join us in our mission to bring joy and companionship to both pets and people.
           Adopt a Paw—where love finds a home.
        </p>
      </div>
    </>
  );
};

export default AboutBanner;
