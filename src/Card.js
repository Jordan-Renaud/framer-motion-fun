import { useState } from "react";
import Arrow from "./images/arrow";
import "./Card.css";

export default function Card({ cardData, placement }) {
  const [flipCard, setFlipCard] = useState("");
  const isFrontCard = cardData.front.title === "FrontCard";

  function handleCardClick() {
    flipCard === "" ? setFlipCard("is-flipped") : setFlipCard("");
  }

  return (
    <div className={`Card ${flipCard} ${placement}`} onClick={handleCardClick}>
      <div className="front-of-card card-side">
        <div className="content">
          {isFrontCard ? (
            <div className="first-card">{cardData.front.content}</div>
          ) : (
            <div>
              <h2 className="sub-title">{cardData.front.title}</h2>
              <a
                className="website-link"
                href={cardData.front.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="card-image">{cardData.front.content}</div>
              </a>

              <Arrow />
              <p className="hand-written">Check it out</p>
            </div>
          )}
        </div>
      </div>
      <div className="back-of-card card-side">
        <div className="content">
          <h2 className="sub-title">{cardData.back.title}</h2>
          {cardData.back.content.map((section, index) => (
            <div className="content-section" key={index}>
              {section}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
