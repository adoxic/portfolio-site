import React from 'react';

const data = [{
  urlFE: 'tarot-reader.github.io',
  urlBE: 'https://github.com/tarot-reader/tarot-reader.github.io',
  img: '../src/image/tarot3.png',
  img2: '../src/image/tarot4.png',
}];

const Cards = () => {
  const mappedCards = data.map((card, i) => {
    return (
      <div key={i}>
        <a href={card.urlFE}>
          <img src={card.img} />
        </a>

        <a href={card.urlBE}>
          <img src={card.img2} />
        </a>
      </div>
    );
    
  });
  return (
    <ul>
      {mappedCards}
    </ul>
  );
};

export default Cards;
