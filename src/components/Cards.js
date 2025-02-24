import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import multiarmedbandits from "../pdfs/multiarmedbandits.pdf";
import galaxydistances from "../pdfs/galaxydistances.pdf";
import bertrandcompetition from "../pdfs/bertrandcompetition.pdf";
import dotsandboxes from "../pdfs/2rowdotsandboxes.pdf";
import heartrate from "../pdfs/heartrate.pdf";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/bandits.jpg")}
              text="Multi-Armed Bandits"
              label="Python"
              path={multiarmedbandits}
            />
            <CardItem
              src={require("../images/galaxy.jpg")}
              text="Galaxy Distances"
              label="Python"
              path={galaxydistances}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/bertrand.png")}
              text="Bertrand Competition"
              label="Python"
              path={bertrandcompetition}
            />
            <CardItem
              src={require("../images/dots.png")}
              text="Dots and Boxes"
              label="Python"
              path={dotsandboxes}
            />
            <CardItem
              src={require("../images/heart.jpg")}
              text="Heart Rate Analysis"
              label="R"
              path={heartrate}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
