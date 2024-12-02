import React from "react";
import { Hero, Offer } from "./components.exports";

const Homepage = () => {
  return (
    <div className="project__wrapper">
      <Hero />
      <div className="divider container__large">
        <span className="tag">
          <p>My Fields</p>
        </span>
      </div>
      <Offer />
    </div>
  );
};

export default Homepage;
