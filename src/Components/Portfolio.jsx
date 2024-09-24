/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
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
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img className="portimage"
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
