import React from "react";
import "../../App.css";
import Cards from "../Cards";
import background from "../../images/background.jpg";

function Projects() {
  return (
    <div
      className="project-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Cards />
    </div>
  );
}

export default Projects;
