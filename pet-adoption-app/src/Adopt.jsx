import React, { useState } from 'react';
import './Adopt.css';
import Modal from './Modal';
import bannerImage from './images/adopt_banner.jpg';
import cardpic1 from './images/5.pic.jpg';
import cardpic2 from './images/6.pic.jpg';
import cardpic3 from './images/7.pic.jpg';
import cardpic4 from './images/8.pic.jpg';
import cardpic5 from './images/9.pic.jpg';
import cardpic6 from './images/10.pic.jpg';

function Adopt() {
  const [adoptForm, setAdoptForm] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const showAdoptForm = (pet) => {
    setSelectedPet(pet); 
    setAdoptForm(true);
  };

  const hideAdoptForm = () => {
    setAdoptForm(false);
  };

  const [petsData, setPetsData] = useState([
    {
      categoryName: 'Available Cats',
      pets: [
        {
          id: 1,
          name: 'Jorts',
          gender: 'Male',
          isNeutered: true,
          breed: 'Domestic Shorthair',
          age: '2 years',
          image: cardpic1,
          isAdopted: false
        },
        {
          id: 2,
          name: 'Orange',
          gender: 'Female',
          isNeutered: true,
          breed: 'Domestic Shorthair',
          age: '11 months',
          image: cardpic2,
          isAdopted: false
        },
        {
          id: 3,
          name: 'Itty Bitty',
          gender: 'Male',
          isNeutered: false,
          breed: 'American Shorthair',
          age: '2 months',
          image: cardpic3,
          isAdopted: false
        }
      ]
    },
    {
      categoryName: 'Available Dogs',
      pets: [
        {
          id: 4,
          name: 'Cooper',
          gender: 'Male',
          isNeutered: true,
          breed: 'Border Collie',
          age: '2 years',
          image: cardpic4,
          isAdopted: false
        },
        {
          id: 5,
          name: 'Sammy',
          gender: 'Male',
          isNeutered: false,
          breed: 'Golden Retriever',
          age: '3 months',
          image: cardpic5,
          isAdopted: false
        },
        {
          id: 6,
          name: 'Teddy',
          gender: 'Female',
          isNeutered: true,
          breed: 'Mix Breed',
          age: '1 year',
          image: cardpic6,
          isAdopted: false
        }
      ]
    }
 ]);

 const handleFormSubmit = (formData) => {
  setPetsData((prevPetsData) => {
    return prevPetsData.map((category) => ({
      ...category,
      pets: category.pets.map((pet) =>
        pet.id === selectedPet.id ? { ...pet, isAdopted: true } : pet
      ),
    }));
  });
  hideAdoptForm();
  // Additional logic for handling form submission
  console.log('Form submitted:', formData);
};
  

  return (
    <>
      <div className="adopt-banner">
        <img src={bannerImage} alt="Banner" className="adopt-banner__image" />
        <div className="adopt-banner__content">
          <h2 className="adopt-banner__heading">Adopt</h2>
          <p className="adopt-banner__text">
            Transform a Life with Love, <br />
            a little love goes a long way.
          </p>
        </div>
      </div>

      {petsData.map((category) => (
        <div key={category.categoryName}>
          <h2 className="main__heading" id="main">{category.categoryName}</h2>
          <div className="cards">
          {category.pets.map((pet) => (
            <div key={pet.id} className="card">
              <img src={pet.image} alt={`Image of ${pet.name}`} className="card__img" />
              <h3 className="card__heading">{pet.name}</h3>
              <p className="card__text">
                {pet.isAdopted ? (
                  <span>{pet.name} is currently meeting with potential adopters! 
                  Unfortunately, we aren't able to answer inquiries about adoption pending animals.
                  </span>
                ) : (
                  <>
                    {pet.gender} {pet.isNeutered ? (pet.gender === 'Male' ? '/ Neutered' : '/ Spayed') : ''}
                    <br />
                    {pet.breed}
                    <br />
                    {pet.age}
                  </>
                )}
              </p>
              {!pet.isAdopted && (
                <button className="card__button" onClick={() => showAdoptForm(pet)}>
                  Meet {pet.name}
                </button>
              )}
            </div>
          ))}
          </div>
        </div>
      ))}

      {adoptForm && (
        <Modal
          isOpen={adoptForm}
          closeModal={hideAdoptForm}
          pet={selectedPet}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </>
  );
}

export default Adopt;
