import { useState } from "react";
import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Box1 from "./components/Box1";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <Box1 />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    
    </>
  );
}

export default App;
