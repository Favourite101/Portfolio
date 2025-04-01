import React, { useEffect, useRef, useState } from "react";
import image from "../images/ch4.png";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a passionate software engineer with a strong focus on backend development while also building intuitive and responsive frontends. I thrive on designing scalable, efficient server-side systems that ensure seamless application performance. At the same time, I enjoy working with modern frontend technologies to create well-rounded user experiences. Constantly learning and refining my skills, I aim to build robust, high-performing applications that solve real-world problems.";

const skillsList = [
  "Software Engineering Principles: Design Patterns, Scalability, Clean Code, Test-Driven Development (TDD)",
  "Programming Languages: Java (Spring Boot), Python (Django), JavaScript (React & Angular), C#",
  "Backend Development: High-Performance RESTful APIs, Security & Authentication (OAuth, JWT)",
  "Frontend Development: Modern UI Development (React, Angular), State Management",
  "Database Management: Relational & NoSQL Databases (MySQL, PostgreSQL, MongoDB)",
  "DevOps & Cloud: CI/CD Pipelines, Cloud Platforms (AWS, Azure)",
  "Problem Solving and Critical Thinking",
  "Technical Writing and Documentation",
];

const detailOrQuote =
  "I’m Favour Oluwatunmibi, a software engineer on a mission to solve real-world problems through code. Every line I write, every system I design, is driven by one question: How can technology make this better?";

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
