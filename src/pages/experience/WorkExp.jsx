import React from "react";
import { LinearGradient } from "react-text-gradients";
import DataArray from "./expData";

import "./workExp.css";

const WorkExp = () => {
  return (
    <div className="project__work__exp__container container__large">
      <div className="project__work__exp__row">
        <div className="project__work__exp">
          <h2>
            <LinearGradient
              gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
              fallbackColor="var(--text-color)"
            >
              Work Experience
            </LinearGradient>
          </h2>
          {DataArray.expData.map((item) => {
            const {
              arrayId,
              expIcon,
              expTitle,
              expCompany,
              expDateStart,
              expDateCurrent,
            } = item;
            return (
              <div className="project__work__exp__box" key={arrayId}>
                <div className="project__work__exp__icon__box">
                  <span>{expIcon}</span>
                </div>
                <div className="project__exp__details">
                  <p>
                    {expTitle}{" "}
                    <strong
                      className="bold__text"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      {" "}
                      {expCompany}
                    </strong>
                  </p>
                  <small className="muted">
                    {expDateStart} - {expDateCurrent}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
        <div className="project__awards">
          <h2>
            <LinearGradient
              gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
              fallbackColor="var(--text-color)"
            >
              Awards & Recognition
            </LinearGradient>
          </h2>
          {DataArray.awardData.map((item) => {
            const { awardId, awardIcon, awardTitle, awardCompany, awardDate } = item;
            return (
              <div className="project__work__exp__box" key={awardId}>
                <div className="project__work__exp__icon__box">
                  <span>{awardIcon}</span>
                </div>
                <div className="project__exp__details">
                  <p>
                    {awardTitle}{" "}
                    <strong
                      className="bold__text"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      {" "}
                      {awardCompany}
                    </strong>
                  </p>
                  <small className="muted">{awardDate}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
