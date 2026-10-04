import "./ArrowedLink.css";

function ArrowedLink({ label, link }) {
  return (
    <div className="link-container">
      <a href={link} className="link">
        <span>{label}</span>
        <svg
          className="link-arrow"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M20 12L14 6M20 12L14 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

export default ArrowedLink;
