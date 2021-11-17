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
      <div className="front-of-card card-side">
        <div className="content">
          <h2 className="sub-title">{front.title}</h2>
          <a className="website-link" href={front.link} target="_blank">
            <div className="card-image">{front.content}</div>
          </a>
        </div>
      </div>
      <div className="back-of-card card-side">
        <div className="content">
          <h2 className="sub-title">{back.title}</h2>
          {back.content.map((section) => (
            <div className="content-section">{section}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
