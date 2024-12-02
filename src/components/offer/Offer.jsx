import React from "react";
import { LinearGradient } from "react-text-gradients";
import {
  RiPencilFill as PenIcon,
  RiPhoneLine as MobileIcon,
  RiComputerLine as DesignIcon,
  RiLightbulbFlashLine as DevIcon,
} from "react-icons/ri";

import "./offer.css";

const Offer = () => {
  return (
    <div className="project__services__container container__large">
      <div className="project__services__header">
        <h2 className="text__center">
          <LinearGradient
            gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
            fallbackColor="var(--text-color)"
          >
            Collaborate with brands and agencies to <br className="breakage" />{" "}
            create impactful results.
          </LinearGradient>
        </h2>

        
      </div>

      <div className="project__services__row">
        <div className="project__service">
          <span>
            <PenIcon color="var(--text-color)" size={30} />
          </span>
          <h3>Ui & Ux</h3>
          <small className="muted">
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </small>
        </div>
        <div className="project__service">
          <span>
            <MobileIcon color="var(--text-color)" size={30} />
          </span>
          <h3>Web & Mobile App</h3>
          <small className="muted">
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </small>
        </div>
        <div className="project__service">
          <span>
            <DesignIcon color="var(--text-color)" size={30} />
          </span>
          <h3>Design</h3>
          <small className="muted">
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </small>
        </div>
        <div className="project__service">
          <span>
            <DevIcon color="var(--text-color)" size={30} />
          </span>
          <h3>Development</h3>
          <small className="muted">
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Offer;
