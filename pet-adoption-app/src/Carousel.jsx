import React, { useState } from 'react';
import './Carousel.css';
import img1 from './images/13.jpg';
import img2 from './images/14.jpg';
import img3 from './images/15.jpg';
import Slide from './Slide';
import NavButton from './NavButton';

const CarouselComponent = ({  onPageChange }) => { // Destructure the argument here
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const handleNavClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const handleButtonClick = (buttonLink) => {
    onPageChange(buttonLink);
  };

  const getTranslateXValue = () => {
    switch (currentSlide) {
      case 1:
        return '0%';
      case 2:
        return '-33.33%';
      case 3:
        return '-66.67%';
      default:
        return '0%';
    }
  };


  const slidesData = [
    {
      imgSrc: img1,
      altText: 'Slide 1',
      heading: (
        <>
          Welcome to Adopt a Paw! <br />
          Your journey to find a furry friend starts here.
        </>
      ),
      text: (
        <>
          You can chip in with money and effort! <br />
          Support our mission to find loving homes for animals in need.
        </>
      ),
      buttonText: 'Donate Now',
      buttonLink: 'Donate'
    },
    {
      imgSrc: img2,
      altText: 'Slide 2',
      heading: (
        <>
          Every pet deserves a loving home. <br />
          Discover adorable pets waiting for you.
        </>
      ),
      text: (
        <>
          Explore our wide range of pets ready for adoption. <br />
          Find your perfect match and a lifelong companion!
        </>
      ),
      buttonText: 'Adopt Now',
      buttonLink: 'Adopt'
    },
    {
      imgSrc: img3,
      altText: 'Slide 3',
      heading: (
        <>
          Make a difference in an animal's life. <br />
          Start your voluntee journey today!
        </>
      ),
      text: (
        <>
          Join our volunteer team and create a positive impact for animals  <br />
          Your support and care can make a difference in their lives.
        </>
      ),
      buttonText: 'Learn More',
      buttonLink: 'Volunteer'
      }
      ];
      
      return (
      <div className="slider-container">
      <div className="slider">
      <div className="slides" style={{ transform: `translateX(${getTranslateXValue()})` }}>
      {slidesData.map((slide, index) => (
      <Slide
      key={index}
      imgSrc={slide.imgSrc}
      altText={slide.altText}
      heading={slide.heading}
      text={slide.text}
      buttonText={slide.buttonText}
      buttonLink={slide.buttonLink}
      isActive={currentSlide === index + 1}
      handleButtonClick={handleButtonClick}
      />
      ))}
      </div>
      <button className="slide__prev" onClick={handlePrevClick} title="Prev"></button>
      <button className="slide__next" onClick={handleNextClick} title="Next"></button>
      <div className="slider__nav">
      {slidesData.map((_, index) => (
      <NavButton
      key={index}
      slideNumber={index + 1}
      isActive={currentSlide === index + 1}
      onClick={handleNavClick}
      aria-label="carousel thumbnails"
      />
      ))}
      </div>
      </div>
      </div>
      );
      };
      
      export default CarouselComponent;
