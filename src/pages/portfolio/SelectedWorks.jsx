import React from "react";
import SelectedWorksData from "./SelectedWorksData";
import { LinearGradient } from "react-text-gradients";
import { RiShareBoxLine as VisitIcon } from "react-icons/ri";

const SelectedWorks = () => {
  return (
    <>
      {SelectedWorksData.map((item) => {
        const {
          id,
          projectImage,
          projectTitle,
          projectSubtitle,
          projectDate,
          projectDetails,
          projectLink,
        } = item;
        return (
          <div className="project__selected__work" key={id}>
            <div className="project__selected__image__container">
              <img src={projectImage} alt="Doorcta" />
            </div>
            <br />
            <h3 className="project__selected__title">
              <LinearGradient
                gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
                fallbackColor="var(--text-color)"
              >
                {projectTitle}.
              </LinearGradient>
            </h3>
            <small className="project__selected__subtitle">
              {projectSubtitle}.
            </small>
            <br />
            <small className="project__selected__date muted">
              {projectDate}.
            </small><br /><br />
            <div className="small project__selected__details muted">
              <small className="muted" style={{ fontSize: '13px' }}>{projectDetails}</small>
            </div>
            <button className="project__selected__view">
              <a href={projectLink} target="_blank" rel="noreferrer">
                Visit
                <VisitIcon color="var(--text-color)" size={18} />
              </a>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default SelectedWorks;
