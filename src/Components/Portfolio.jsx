/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written, and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import image from "../images/ch7.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tribble Newsletters",
    description:
      "Collaborated with a team to build a newsletter management system using HTML, CSS, PHP, and JavaScript. As the backend developer, I implemented email subscriptions, storing emails in a database on XAMPP, and sending confirmation emails.",
    url: "https://tribblenews.000webhostapp.com",
  },
  {
    title: "School Management System",
    description:
      "Developed a comprehensive school management system for UCCSchools and currently expanding its capabilities. Built using HTML, CSS (Bootstrap), Python (Django), JavaScript, and Azure.",
    url: "https://uccschools.com.ng",
  },
  {
    title: "Kuda Clone",
    description:
      "Led a team to develop a Kuda clone using HTML, TailwindCSS, React, and Supabase. Worked on the frontend for the 'Profile' and 'Pay' sections, and on the backend with Supabase. Hosted on Azure.",
    url: "https://white-ocean-04314c40f.5.azurestaticapps.net/",
  },
  {
    title: "ToDO List API",
    description: "Created a RESTful API for a ToDO list application using Python (Django).",
    url: "https://github.com/Favourite101/ToDO-List-API",
  },
];

const Portfolio = () => {
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
    <section className="padding" id="portfolio" ref={sectionRef}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <motion.img 
            className="portimage"
            src={image}
            alt={imageAltText}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Slide in from the left
            transition={{ duration: 1.5 }} // Animation duration
          />
        </div>
        <motion.div
          className={`container ${isVisible ? "visible" : ""}`} // Add class based on visibility
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } }, // Increased duration for visibility animation
          }}
        >
          {projectList.map((project) => (
            <motion.div
              className="box"
              key={project.title}
              whileHover={{ scale: 1.05 }} // Scales up when hovered
              whileTap={{ scale: 0.95 }}   // Scales down when clicked
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
