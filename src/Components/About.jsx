/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/ch4.png";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a passionate developer with a foot in two worlds: building robust backend systems and exploring the potential of Artificial Intelligence. I thrive on crafting clean, efficient code for the server-side, ensuring smooth application functionality.  At the same time, I'm fascinated by AI and its ability to solve complex problems. I'm constantly learning and experimenting with machine learning and deep learning techniques, eager to contribute to the future of intelligent systems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Programming Languages: Python, JavaScript, Java, PHP, C++",
  "Database Management: MySQL, MongoDB",
  "RESTful APIs",
  "Problem Solving and Critical Thinking",
  "Data visualization",
  "Creating machine learning models",
  "Prompt Engineering",
  "Creative writing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I aknowledge that I am a work in progress but I am open to learn new things. I have experience in database management, creating APIs and creating machine learning models. I am also a creative writer and I love to write about my experiences and things I have learnt.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background3" src={image} alt={imageAltText} />
      <div
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