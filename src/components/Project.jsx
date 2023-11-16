import React from "react";
import Projectcard from "./Projectcard";
function Project() {
  return (
    <div id="projects">
      <small className="small">Browse My Recent</small>
      <h1 className="h1">Projects</h1>
      <div className="cardbox">
        <Projectcard name="Project 1"/>
        <Projectcard name="Project 2"/>
        <Projectcard name="Project 3"/>
      </div>
    </div>
  );
}

export default Project;
