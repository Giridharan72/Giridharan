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

function Cyber_Security() {
  const [showFullText, setShowFullText] = useState({});

  const toggleText = (index) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardData = [
    {link:'https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/', image: 'cyber.png', text: <div><h4>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</h4>
    <p>In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.

While it is true that certain cybersecurity roles require extensive coding knowledge, there are plenty of non-coding jobs within the industry that play a crucial role in protecting organizations from cyber threats.

In this comprehensive guide, we will explore the various non-coding jobs in cybersecurity, the skills required for each role, and how to pursue a career in this exciting field.</p></div>, date: '23/04/2021' },
    { link:'https://www.guvi.in/blog/what-is-hacking/',image: 'cyber1.png', text: <div><h4>What Is Hacking? Types of Hacking & More</h4>
    <p>Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the different kinds of hacking that exist. 

For example, there are hackers who try to steal your passwords and others who fight to protect your information. Some hackers even have strong beliefs and use their skills to support their causes. It’s a bit like a digital battlefield out there.</p></div>, date: '23/09/2021' },
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

export default Cyber_Security;
