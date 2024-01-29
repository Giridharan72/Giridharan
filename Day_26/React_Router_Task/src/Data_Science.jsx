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

function Data_Science() {
  const [showFullText, setShowFullText] = useState({});

  const toggleText = (index) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardData = [
    { image: 'Data1.png', text: <div>
    <h4>Top 10 High Paying Non-Coding Jobs in Data Science in 2024</h4>
    <p>
    Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding. Data science has evolved to become one of the most sought-after fields in the tech industry.

While coding remains an integral part of data science, it’s not the only path to a successful career in this dynamic field. In 2024, tech companies and startups are expanding their teams to include professionals who excel in non-coding jobs in data science.
    </p>
  </div>, date: '4/05/2023' },
  { link: 'https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/',image: 'Data2.png', text: <div>
    <h4>Top Product-Based Companies for Data Science Freshers</h4>
    <p>In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.

As a data science fresher, it’s essential to find the right company that aligns with your interests and offers the right growth opportunities.

In this article, we will explore the top product-based companies for data science freshers, along with the factors to consider when choosing the right employer.</p>
  </div>, date: '8/04/2022' },
  {link:'https://www.guvi.in/blog/difference-between-data-science-and-data-engineering/', image: 'Data3.png', text: <div><h4>What is the Difference between Data Science and Data Engineering?</h4>
  <p>India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. 

Companies, big and small, are hungry for data. They want to gather it, crunch it, and use it to supercharge their businesses. And guess where a lot of this action’s happening? Tech hotspots like Bengaluru, Hyderabad, and Pune! 

But here’s the thing: within this exciting world of data, there are some roles that often get mixed up – like data scientists and data engineers.</p></div>, date: '23/09/2022' },
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

export default Data_Science;
