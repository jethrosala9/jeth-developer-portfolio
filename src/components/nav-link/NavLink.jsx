import "./NavLink.css";

function NavLink({ label, link }) {
  return (
    <div className="nav-link">
      <a href={link}>{label}</a>
      <span className="line"></span>
    </div>
  );
}

export default NavLink;
