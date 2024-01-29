import React, { useState } from 'react';

function Card({ link, image, text, date, showFullText, toggleText }) {
  const handleImageClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
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

function Home() {
  const [showFullText, setShowFullText] = useState({});

  const toggleText = (index) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardData = [
    { link: 'https://www.guvi.in/blog/introduction-to-web-components/',image: 'full_1.png', text:<div>
    <h4>Web Components: A Deep Dive into Reusable and Custom Elements [2024]</h4>
    <p>
      As a full-stack developer, have you ever got bored of using the same HTML, CSS, and JavaScript codes? Initially, it may be interesting, but over some time, over a million lines of code, you will get bored of it, and in the worst case,
       you may lose interest as well.So what can be done to rejuvenate your interest? That’s where web components come in. They enable you to create elements according to your wish and it works just the way you want it to be. The best part
    </p>
  </div>, date: '28,09/2021'},
    {linl:'https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/', image: 'full_2.png', text: 
    <div>
      <h4>Top Ways to Assess Soft Skills in Full Stack Developers in 2024</h4>
      <p>When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well within your organization?
      This issue is prevalent across the tech industry. We stay focused on the technical and hard skills of our potential developers, but we often forget about the necessary soft skills in full-stack developer that one would need to function properly in an organization
      </p>
    </div>, date: '29/01/2024' },
    {link:'https://www.guvi.in/blog/full-stack-developer-vs-software-engineer/' ,image: 'full_3.png', text: <div>
      <h4>Top Differences: Full Stack Developer vs Software Engineer 2024</h4>
      <p>A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.

Understanding these jobs helps people choose what they might like to do. It’s important for companies, too. They can put the right people in the right parts of a project. Knowing the differences helps teams work better together and gets things done faster.</p>
    </div>, date: '1/01/2024' },
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
    {link:'https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/', image: 'cyber.png', text: <div><h4>Non-Coding Jobs in Cybersecurity: A Comprehensive Guide</h4>
    <p>In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.

While it is true that certain cybersecurity roles require extensive coding knowledge, there are plenty of non-coding jobs within the industry that play a crucial role in protecting organizations from cyber threats.

In this comprehensive guide, we will explore the various non-coding jobs in cybersecurity, the skills required for each role, and how to pursue a career in this exciting field.</p></div>, date: '23/04/2021' },
    { link:'https://www.guvi.in/blog/what-is-hacking/',image: 'cyber1.png', text: <div><h4>What Is Hacking? Types of Hacking & More</h4>
    <p>Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. We’ll look at the different kinds of hacking that exist. 

For example, there are hackers who try to steal your passwords and others who fight to protect your information. Some hackers even have strong beliefs and use their skills to support their causes. It’s a bit like a digital battlefield out there.</p></div>, date: '23/09/2021' },
    { link:'https://www.guvi.in/blog/top-technologies-to-learn-now/',image: 'Career1.png', text: <div><h4>Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career</h4>
    <p>If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. The tech industry is rapidly evolving and as a representative of the techie world, we can feel how daunting it must feel to keep up!

But hey, that’s the beauty of tech. There’s always something new and better to discover. The past decade has been synonymous with exponential growth in technical innovation with close to 2.4 million job openings in 2023 alone. </p></div>, date: '8/09/2023' }
  ];

  return (
    <div className="card-container"> {/* Container for the cards */}
      {cardData.map((card, index) => (
        <div key={index} className="column"> {/* Apply the 'column' class */}
          <Card
            link={card.link} // Pass link to Card component
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

export default Home;
