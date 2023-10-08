import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import RowCard from './RowCard';

const cardData = [
  {
    title: 'Plan 1',
    location: 'Location 1',
    description:'Childplan',
  },
  {
    title: 'Card 2',
    location: 'Location 2',
    description:'Childplan1',

  },
  {
    title: 'Card 3',
    location: 'Location 3',
    description:'Childplan3',
  },
  {
    title: 'Card 4',
    location: 'Location 4',
    description:'Childplan4',
  },
];

const CardCarousel = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    // You can perform additional actions here based on the selected card
  };

  return (
    <div>
      <Carousel>
        {cardData.map((card, index) => (
          <div key={index}>
            <RowCard title={card.title} location={card.location} description={card.description} onClick={handleCardClick} />
          </div>
        ))}
      </Carousel>

      {selectedCard && (
        <div>
          {/* Display the selected card data */}
          <h2>Selected Card:</h2>
          <p>Title: {selectedCard.title}</p>
          <p>Location: {selectedCard.location}</p>
        </div>
      )}
    </div>
  );
};

export default CardCarousel;
