import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Oluwatunmibi Favour",
  title: "Software Engineer",
  email: "ofavourite001@gmail.com",
  gitHub: "Favourite101",
  linkedIn: "favourtunmibi",
  medium: "favourwrites",
  twitter: "Fav_fantasy_",
  youTube: "",
};

const primaryColor = "#008B8B";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <motion.div
      id="main"
      initial={{ opacity: 0 }}           // Animation starts from invisible
      animate={{ opacity: 2 }}           // Fades into view
      transition={{ duration: 2 }}       // Takes 1 second to fully appear
    >
      <Header />
      <motion.div
        initial={{ y: -50, opacity: 2 }}  // Slide up animation with fade-in
        animate={{ y: 0, opacity: 1 }}    // Animates into its original position
        transition={{ duration: 2 }}
      >
        <Home name={siteProps.name} title={siteProps.title} />
      </motion.div>
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </motion.div>
  );
};

export default App;
