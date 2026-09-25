import "./SideHeader.css";
import NavLink from "../nav-link/NavLink.jsx";
import HeroSvg from "../hero-svg/HeroSvg.jsx";
import ButtonFilled from "../button-filled/ButtonFilled.jsx";
import { useState } from "react";
import heroImage from "../../assets/hero-logo.png";

function SideHeader() {
  const labels = [
    { label: "About", link: "#" },
    { label: "Experience", link: "#" },
    { label: "Projects", link: "#" },
  ];

  return (
    <aside className="aside">
      <div className="hero">
        <div className="hero-logo">
          <img src={heroImage} alt="" />
        </div>
        <div className="header-texts">
          <h1>Jeth Sala</h1>
          <h2>Developer & 3D Artist</h2>
          <h3>
            I build digital experiences
            <br />
            from pixels to polygons.
          </h3>
        </div>
      </div>
      <div className="nav-links">
        {labels.map((item) => (
          <NavLink label={item.label} link={item.link} />
        ))}
      </div>
    </aside>
  );
}

export default SideHeader;
