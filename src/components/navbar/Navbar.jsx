import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine as EmailIcon,
  RiMenu2Line as OpenMenuIcon,
  RiCloseLine as CloseMenuIcon,
} from "react-icons/ri";

import "./navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCurrentLocation(data.address));
    });
  });

  const handleSidebarToggle = () => {
    setSidebar(!sidebar);
  };
  // Get current time
  const [time, getTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      getTime(new Date());
    }, 1000);

    return function reset() {
      clearInterval(timer);
    };
  });


  return (
    <nav className="project__navbar__container container__large">
      <div className="project__navbar__menu__left small">
        <a href="mailto:hello.ashrafyusuf@gmail.com">
          <span className="project__navbar__menu__email__icon">
            <EmailIcon color="var(--text-color)" size={18} />
          </span>
          <span className="email">hello.ashrafyusuf@gmail.com</span>
          <span className="mobile__visible">Say Hi 👋</span>
        </a>
      </div>
      <div className="project__navbar__menu__right">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
        </ul>

        <div className="project__navbar__timelocation__container">
          <p className="location" style={{ textTransform: "capitalize" }}>
            {currentLocation.country}
          </p>
          <h4 className="time">{time.toLocaleTimeString()}</h4>
        </div>

        <div className="project__navbar__menu__toggle__container mobile__visible">
          <button onClick={handleSidebarToggle}>
            {!sidebar && (
              <OpenMenuIcon color="var(--secondary-color)" size={22} />
            )}
          </button>
        </div>
      </div>

      <div className={sidebar ? "show__sidebar" : "hide__sidebar"}>
        <div className="project__sidebar__content">
          <div className="close__button__container">
            <button onClick={handleSidebarToggle}>
              {sidebar && (
                <CloseMenuIcon color="var(--secondary-color)" size={22} />
              )}
            </button>
          </div>
          <ul>
            <li onClick={handleSidebarToggle}>
              <Link to={"/"}>Home</Link>
            </li>
            <li onClick={handleSidebarToggle}>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
          </ul>
        </div>

        <small className="text__center">
          Copyright © 2024 | All rights reserved.
        </small>
      </div>
    </nav>
  );
};

export default Navbar;
