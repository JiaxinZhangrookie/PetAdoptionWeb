import React from 'react';
import './Home.css';
import cardpic1 from './images/2.pic.jpg';
import cardpic2 from './images/3.pic.jpg';
import cardpic3 from './images/4.pic.jpg';
import CarouselComponent from './Carousel';

function Home({ setPage }) {
  return (
    <>
    <CarouselComponent className="carousel" onPageChange={setPage}/>
    <main 
      className="main" id="main" >
      <h2 className="main__heading">How to adopt a pet? </h2>
      <div className="cards">
        <div className="first-card">
          <img src={cardpic1} alt="a cat with its hands up" className="first-card__img" />
          <h2 className="first-card__heading">Choose Pet</h2>
          <p className="first-card__text">
          Choose the pet you want to adopt and check the details such as age,
          healthstatus and ask all those questions you have so that this experience issuccessful and wonderful.
          </p>
        </div>

        <div className="second-card">
          <img src={cardpic2} alt="four cats" className="second-card__img" />
          <h2 className="second-card__heading">Fill Adpotion Form</h2>
          <p className="second-card__text">
          Fill in the complete information in the adoption process, 
          remember that thisstep is the most important of all, since we try to make everything as 
          legal and transparent as possible.
          </p>
        </div>

        <div className="third-card">
          <img src={cardpic3} alt="a cat with its hands up" className="third-card__img" />
          <h2 className="third-card__heading">Meet Pet In Person</h2>
          <p className="third-card__text">
          Arrange a meeting with the pet you're interested in adopting. This is a great opportunity
          to bond and ensure that both you and the pet are comfortable with each other.
          </p>
        </div>
      </div>
    </main>
    </>
  );
}

export default Home;
