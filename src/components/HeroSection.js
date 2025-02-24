import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={require("../videos/hero.mp4")} autoPlay loop muted />
      <h1> ADAM BOUSTANI </h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="/cv.pdf"
          external={true}
        >
          View CV <i className="fa-solid fa-file" />
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="/projects"
        >
          View Projects <i className="fa-solid fa-diagram-project" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
