import React, { useState } from 'react';
import './Volunteer.css';
import foster from './images/foster.jpg';
import petCare from './images/pet-care.jpg';
import petSport from './images/pet-sport.jpg';
import petTraining from './images/pet-training.jpg';
import bannerImage from './images/volunteer.jpg'

function Volunteer() {
  const allItems = [
    { id: 1, title: 'Foster Family', imageUrl: foster, category: 'Foster Family' },
    { id: 2, title: 'Pets Care', imageUrl: petCare, category: 'Pets Care' },
    { id: 3, title: 'Pet Sport', imageUrl: petSport, category: 'Pets Training' },
    { id: 4, title: 'Pet Training', imageUrl: petTraining, category: 'Pets Training' },
  ];

  const [items, setItems] = useState(allItems);

  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === 'All') {
      setItems(allItems);
    } else {
      const filteredItems = allItems.filter(item => item.category === selectedCategory);
      setItems(filteredItems);
    }
  };

  return (
    <div className="volunteer">
      <div className="volunteer-banner">
        <img src={bannerImage} alt="Banner" className="volunteer-banner__image" />
        <h2 className="volunteer-banner__heading">Volunteer Opportunities</h2>
      </div>

      <div className="volunteer__filter" id="main">
        <label>
          Filter by category:
          <select className="volunteer__select" onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Pets Care">Pets Care</option>
            <option value="Foster Family">Foster Family</option>
            <option value="Pets Training">Pet Training</option>
          </select>
        </label>
      </div>

      <div className="volunteer__gallery">
        {items.map(item => (
          <div key={item.id} className="volunteer__item">
            <img src={item.imageUrl} alt={item.title} className="volunteer__image" />
            <h3 className="volunteer__item-title">{item.title}</h3>
            <p className="volunteer__item-category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Volunteer;
