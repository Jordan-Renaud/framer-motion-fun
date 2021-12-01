import "./ArrowButton.css";

export default function ArrowButton({ arrow, onClick }) {
  return (
    <button className="ArrowButton" onClick={onClick}>
      {arrow}
    </button>
  );
}
