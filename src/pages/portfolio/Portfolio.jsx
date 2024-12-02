import React from "react";
import { LinearGradient } from "react-text-gradients";
import {
  RiArrowDownLine as ArrowDownIcon,
  RiStarLine as StarIcon,
  RiComputerLine as DesignIcon,
  RiSmartphoneLine as MobileIcon,
  RiTimeLine as TimeIcon,
} from "react-icons/ri";

import SelectedWorks from "./SelectedWorks";
import WorkExp from "../experience/WorkExp";
import ServiceTemplate from "./ServiceTemplate";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="project__portfolio__container container__large">
      {/* About */}
      <div className="project__about__row">
        <div className="project__about__left">
          <h1>
            <LinearGradient
              gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
              fallbackColor="var(--text-color)"
            >
              Experience with a variety of projects and companies.
            </LinearGradient>
          </h1>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            ducimus excepturi commodi, sunt placeat harum!
          </small>
          <br />
          <small className="work__container">
            <a href="#works">
              See my works
              <span className="work__icon__container">
                <ArrowDownIcon color="var(--text-color)" size={20} />
              </span>
            </a>
          </small>
        </div>
        <div className="project__about__right">
          <div className="project__box">
            <span>
              <StarIcon color="var(--secondary-color)" size={40} />
            </span>
            <div>
              <h2>
                <LinearGradient
                  gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
                  fallbackColor="var(--text-color)"
                >
                  30+
                </LinearGradient>
              </h2>
              <small className="text__center">
                Projects <br /> completed
              </small>
            </div>
          </div>
          <div className="project__box">
            <span>
              <DesignIcon color="var(--secondary-color)" size={40} />
            </span>
            <div>
              <h2>
                <LinearGradient
                  gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
                  fallbackColor="var(--text-color)"
                >
                  20+
                </LinearGradient>
              </h2>
              <small className="text__center">
                Websites <br /> designed
              </small>
            </div>
          </div>
          <div className="project__box">
            <span>
              <MobileIcon color="var(--secondary-color)" size={40} />
            </span>
            <div>
              <h2>
                <LinearGradient
                  gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
                  fallbackColor="var(--text-color)"
                >
                  10+
                </LinearGradient>
              </h2>
              <small className="text__center">
                Mobile Apps <br /> Developed
              </small>
            </div>
          </div>
          <div className="project__box">
            <span>
              <TimeIcon color="var(--secondary-color)" size={40} />
            </span>
            <div>
              <h2>
                <LinearGradient
                  gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
                  fallbackColor="var(--text-color)"
                >
                  5+
                </LinearGradient>
              </h2>
              <small className="text__center">
                Years <br /> Experience
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div
        className="divider container__large services"
        style={{ width: "100%" }}
      >
        <span className="tag">
          <p>Services</p>
        </span>
      </div>
      <br />
      {/* services */}
      <div className="project__service__portfolio__container">
        <br />
        <h2 className="project__service__portfolio__header text__center">
          <LinearGradient
            gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
            fallbackColor="var(--text-color)"
          >
            I can help you with
          </LinearGradient>
        </h2>
        <br />
        <div className="project__services__grid">
          <ServiceTemplate />
        </div>
      </div>
      {/* divider */}
      <div className="divider container__large" style={{ width: "100%" }}>
        <span id="works" className="tag">
          <p>Projects</p>
        </span>
      </div>
      <br />
      {/* selected works */}
      <div className="project__portfolio__selected__container">
        <h2 className="text__center">
          <LinearGradient
            gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
            fallbackColor="var(--text-color)"
          >
            Selected Works
          </LinearGradient>
        </h2>
        <div className="text__center">
          <small>
            From creative to cutting edge designs, have a look at a few of my
            works.
          </small>
        </div>

        <div className="project__selected__row">
          <SelectedWorks />
        </div>
      </div>

      {/* divider */}
      <div className="divider container__large" style={{ width: "100%" }}>
        <span id="works" className="tag">
          <p>Experience</p>
        </span>
      </div><br /><br />
      <WorkExp />
    </div>
  );
};

export default Portfolio;
