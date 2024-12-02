import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine as ArrowIcon } from "react-icons/ri";
import { LinearGradient } from "react-text-gradients";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="project__hero__container container__large">
        <div className="project__hero__image__container">
          <span className="user__image">🤵🏽</span>
          <span className="project__hero__name__container">
            <p>Ashraf Yusuf👋🏼</p>
          </span>
        </div>
        <div className="project__hero__text__container">
          <h1>
            <LinearGradient
              gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
              fallbackColor="var(--text-color)"
            >
              Building digital <br className="breaker" /> products, brands, and
              experience.
            </LinearGradient>
          </h1>
        </div>
        <Link to={"/portfolio"} className="project__hero__button">
          <button>
            <p>Latest works</p>
            <span>
              <ArrowIcon color="var(--text-color)" size={22} />
            </span>
          </button>
        </Link>
        
      </div>
    </>
  );
};

export default Hero;
