import "./Card.css";
import { useState } from "react";

export default function Card({ front, back, placement }) {
  console.log(placement);
  const [flipCard, setFlipCard] = useState("");

  function handleClick() {
    flipCard === "" ? setFlipCard("is-flipped") : setFlipCard("");
  }
  return (
    <div className={`Card ${flipCard} ${placement}`} onClick={handleClick}>
      <div className="front-of-card">
        <div className="content">
          <h2>{front.title}</h2>
          {front.content}
        </div>
      </div>
      <div className="back-of-card">
        <div className="content">
          <h2>{back.title}</h2>
          {back.content}
        </div>
      </div>
    </div>
  );
}
