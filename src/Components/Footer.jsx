/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion"; // Import motion for animations

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const { devDotTo, email, gitHub, linkedIn, medium, name, primaryColor, twitter, youTube } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
      }}
    >
      <div
        className="footerer"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {email && (
          <motion.a href={`mailto:${email}`} whileHover={{ scale: 1.3 }}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </motion.a>
        )}
        {devDotTo && (
          <motion.a
            href={`https://dev.to/${devDotTo}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </motion.a>
        )}
        {gitHub && (
          <motion.a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </motion.a>
        )}
        {linkedIn && (
          <motion.a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </motion.a>
        )}
        {medium && (
          <motion.a
            href={`https://medium.com/@${medium}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </motion.a>
        )}
        {twitter && (
          <motion.a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </motion.a>
        )}
        {youTube && (
          <motion.a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </motion.a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
