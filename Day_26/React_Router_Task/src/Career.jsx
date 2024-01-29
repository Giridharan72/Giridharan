

import React, { useState } from 'react';

function Card({ link, image, text, date, showFullText, toggleText }) {
  const handleImageClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="card"> {/* Apply the 'card' class */}
      <div className="card-image" onClick={handleImageClick}> {/* Attach click event to image */}
        <img src={image} alt="Card Image" />
      </div>
      <div className="card-text">
        {showFullText ? text : <>{text}</>}
        {!showFullText && text.length > 200 && (
          <button onClick={toggleText}>Read More</button>
        )}
      </div>
      <div className="card-date">{date}</div>
    </div>
  );
}

function Career() {
  const [showFullText, setShowFullText] = useState({});

  const toggleText = (index) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardData = [
    { link:'https://www.guvi.in/blog/top-technologies-to-learn-now/',image: 'Career1.png', text: <div><h4>Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career</h4>
    <p>If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. The tech industry is rapidly evolving and as a representative of the techie world, we can feel how daunting it must feel to keep up!

But hey, that’s the beauty of tech. There’s always something new and better to discover. The past decade has been synonymous with exponential growth in technical innovation with close to 2.4 million job openings in 2023 alone. </p></div>, date: '8/09/2023' }
  ];

  return (
    <div className="card-container"> {/* Container for the cards */}
      {cardData.map((card, index) => (
        <div key={index} className="column"> {/* Apply the 'column' class */}
          <Card
            link={card.link}
            image={card.image}
            text={card.text}
            date={card.date}
            showFullText={showFullText[index]}
            toggleText={() => toggleText(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default Career;
