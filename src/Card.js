import "./Card.css";
import { useState } from "react";

export default function Card({ front, back }) {
  const [flipCard, setFlipCard] = useState("");

  function handleClick() {
    flipCard === "" ? setFlipCard("is-flipped") : setFlipCard("");
  }
  return (
    <div className={`Card ${flipCard}`} onClick={handleClick}>
      <div className="front-of-card">
        <h2>{front.title}</h2>
        {front.content}
      </div>
      <div className="back-of-card">
        <h2>{back.title}</h2>
        {back.content}
      </div>
    </div>
  );
}
