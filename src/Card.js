import { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "./images/arrow";
import "./Card.css";

export default function Card({ cardData, placement }) {
  const [isFlipped, setIsFlippedCard] = useState(false);
  const isFrontCard = cardData.front.title === "FrontCard";

  function handleCardClick() {
    !isFlipped ? setIsFlippedCard(true) : setIsFlippedCard(false);
  }

  return (
    <motion.div
      className={`Card ${placement}`}
      onClick={handleCardClick}
      key={cardData.front.title}
      initial={{ x: 300, opacity: 0 }}
      animate={{
        x: isFlipped ? 400 : 0,
        opacity: 1,
        rotateY: isFlipped ? 180 : 0,
      }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 1.5, type: "easeInOut" }}
    >
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
              <div className="check-it-out-container">
                <div className="tilted-arrow">
                  <Arrow />
                </div>
                <p className="hand-written">Check it out</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="back-of-card card-side">
        <div className="info">
          <h2 className="sub-title">{cardData.back.title}</h2>
          {cardData.back.content.map((section, index) => (
            <div className="content-section" key={index}>
              {section}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
