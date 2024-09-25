import React, { useEffect, useRef, useState } from "react";
import image from "../images/ch4.png";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a passionate developer with a foot in two worlds: building robust backend systems and exploring the potential of Artificial Intelligence. I thrive on crafting clean, efficient code for the server-side, ensuring smooth application functionality.  At the same time, I'm fascinated by AI and its ability to solve complex problems. I'm constantly learning and experimenting with machine learning and deep learning techniques, eager to contribute to the future of intelligent systems.";

const skillsList = [
  "Programming Languages: Python (Django), JavaScript (React & Angular), Java (SpringBoot), CSS (Bootstrap & Tailwind), PHP, C++",
  "RESTful APIs",
  "Prompt Engineering",
  "Problem Solving and Critical Thinking",
  "Data visualization",
  "Creating machine learning models",
  "Creative writing",
  "Database Management: MySQL, PostgreSQL, MongoDB",
];

const detailOrQuote =
  "I am a dedicated learner with a solid foundation in web development, API development, and machine learning model creation. My passion for creative writing allows me to effectively articulate my experiences and insights, showcasing my journey and the knowledge I've gained along the way.";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the section is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="padding" id="about" ref={sectionRef}>
      <img className="background3" src={image} alt={imageAltText} />
      <div
        className={`fade-in ${isVisible ? "visible" : ""}`} // Add class based on visibility
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "2rem",
          margin: "4rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          className="list-u"
          style={{
            textAlign: "left",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
