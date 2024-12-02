import React from "react";
import {
  RiLinkedinBoxFill as LinkedInIcon,
  RiTwitterXLine as TwitterIcon,
  RiGithubLine as GithubIcon,
  RiDiscordLine as DiscordIcon,
} from "react-icons/ri";

import "./socials.css";

const Socials = () => {
  return (
    <div className="project__socials__container">
      <ul>
        <li>
          <a href='https://linkedin.com/moashrafy' target="_blank" rel="noreferrer">
            <LinkedInIcon className="icon" color="var(--secondary-color)" size={22} />
          </a>
        </li>
        <li>
          <a href='https://github.com/Theracon' target="_blank" rel="noreferrer">
            <GithubIcon className="icon" color="var(--secondary-color)" size={22} />
          </a>
        </li>
        <li>
          <a href='https://x.com/ashrafoffixial' target="_blank" rel="noreferrer">
            <TwitterIcon className="icon" color="var(--secondary-color)" size={20} />
          </a>
        </li>
        <li>
          <a href='https://discordapp.com/users/moashrafy' target="_blank" rel="noreferrer">
            <DiscordIcon className="icon" color="var(--secondary-color)" size={22} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
