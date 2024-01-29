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

function Full_stack_Development() {
  const [showFullText, setShowFullText] = useState({});

  const toggleText = (index) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardData = [
    { link: 'https://www.guvi.in/blog/introduction-to-web-components/', image: 'full_1.png', text: <div>
        <h4>Web Components: A Deep Dive into Reusable and Custom Elements [2024]</h4>
        <p>
          As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes? Initially, it may be interesting, but over some time, over a million lines of code, you will get bored of it, and in the worst case,
          you may lose interest as well. So what can be done to rejuvenate your interest? That’s where web components come in. They enable you to create elements according to your wish and it works just the way you want it to be. The best part
        </p>
      </div>, date: '28,09/2021' },
    { link: 'https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/', image: 'full_2.png', text:
      <div>
        <h4>Top Ways to Assess Soft Skills in Full Stack Developers in 2024</h4>
        <p>When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well within your organization?
          This issue is prevalent across the tech industry. We stay focused on the technical and hard skills of our potential developers, but we often forget about the necessary soft skills in full-stack developer that one would need to function properly in an organization
        </p>
      </div>, date: '29/01/2024' },
    { link: 'https://www.guvi.in/blog/full-stack-developer-vs-software-engineer/', image: 'full_3.png', text: <div>
        <h4>Top Differences: Full Stack Developer vs Software Engineer 2024</h4>
        <p>A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.

          Understanding these jobs helps people choose what they might like to do. It’s important for companies, too. They can put the right people in the right parts of a project. Knowing the differences helps teams work better together and gets things done faster.</p>
      </div>, date: '1/01/2024' },
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

export default Full_stack_Development;
