import "./SideHeader.css";
import NavLink from "../nav-link/NavLink.jsx";
import HeroSvg from "../hero-svg/HeroSvg.jsx";
import ButtonFilled from "../button-filled/ButtonFilled.jsx";
import heroImage from "../../assets/hero-logo.png";
import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
  DiscordIcon,
} from "../socials-svgs/SocialsSVGs.jsx";

function SideHeader() {
  const socialLinks = [
    { name: "Facebook", Icon: FacebookIcon, link: "#" },
    { name: "GitHub", Icon: GithubIcon, link: "#" },
    { name: "LinkedIn", Icon: LinkedInIcon, link: "#" },
    { name: "Instagram", Icon: InstagramIcon, link: "#" },
    { name: "YouTube", Icon: YoutubeIcon, link: "#" },
    { name: "Discord", Icon: DiscordIcon, link: "#" },
  ];

  const labels = [
    { label: "About", link: "#" },
    { label: "Experience", link: "#" },
    { label: "Projects", link: "#" },
  ];

  const skills = [
    "CSS",
    "3D Modelling",
    "HTML",
    "JavaScript",
    "React JS",
    "React Native",
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
        {labels.map(({ label, link }) => (
          <NavLink label={label} link={link} />
        ))}
      </div>
      <div className="skills-container">
        {skills.map((item) => (
          <div className="skill-card">{item}</div>
        ))}
      </div>
      <div className="head-footer">
        <div className="btn-cont">
          <ButtonFilled label="Let's Build" />
        </div>
        <ul className="social-links">
          {socialLinks.map(({ name, Icon, link }) => (
            <li key={name}>
              <a href={link} aria-label={name}>
                <Icon className="social-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideHeader;
