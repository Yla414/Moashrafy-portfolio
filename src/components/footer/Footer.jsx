import React from "react";
import { Link } from 'react-router-dom';
import { RiShareBoxLine as Contact } from "react-icons/ri";
import { LinearGradient } from "react-text-gradients";

import "./footer.css";

const Footer = () => {
  return (
    <div className="project__footer__container container__large">
      <div className="project__footer__header">
        <h1 className="text__center">
          <LinearGradient
            gradient={["to right", "var(--text-color) ,var(--text-fade)"]}
            fallbackColor="var(--text-color)"
          >
            Tell me about your <br className="breakage" /> next project
          </LinearGradient>
        </h1>

        <span className="link">
          <a href="mailto:hello.ashrafyusuf@gmail.com">
            Get in Touch
            <Contact color="var(--text-color)" size={22} />
          </a>
        </span>
      </div>

      <div className="project__credit__container container_large">
        <div className="project__credit">
          <span className="copyright">
            <p>Ashraf Mo.</p>
            <small>Copyright © 2024 | All rights reserved.</small>
          </span>
          <ul className="project__footer__links__container">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
