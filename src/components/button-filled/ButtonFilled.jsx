import "./ButtonFilled.css";

function ButtonFilled({ label }) {
  return (
    <button className="btn">
      {label}
      <div className="btn-bg"></div>
    </button>
  );
}

export default ButtonFilled;
