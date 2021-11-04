import "./Card.css";
import { useState } from "react";

export default function Card({ front, back, placement, addClickCount }) {
  const [flipCard, setFlipCard] = useState("");

  function handleCardClick() {
    flipCard === "" ? setFlipCard("is-flipped") : setFlipCard("");
    console.log("Clicked");
    addClickCount();
  }
  return (
    <div className={`Card ${flipCard} ${placement}`} onClick={handleCardClick}>
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
