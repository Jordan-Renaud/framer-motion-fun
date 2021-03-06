import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons, rawCardData } from "./data";
import Card from "./Card";
import ArrowButton from "./ArrowButton";
import LeftArrow from "./images/LeftArrow";
import RightArrow from "./images/RightArrow";
import LinkIcon from "./LinkIcon";
import "./App.css";

function App() {
  const amountOfRawDataCards = rawCardData.length;

  const [cardsLeft, setCardsLeft] = useState(rawCardData);
  const [cardsRemoved, setCardsRemoved] = useState([""]);
  const [previousArrowOpacity, setPreviousArrowOpacity] = useState({
    opacity: 0,
  });
  const [nextArrowOpacity, setNextArrowOpacity] = useState({
    opacity: 1,
  });
  const [previousArrowState, setPreviousArrowState] = useState("hide");
  const [nextArrowState, setNextArrowState] = useState("show");

  //handles next/previous arrow buttons
  useEffect(() => {
    if (cardsLeft.length === amountOfRawDataCards) {
      //remove left arrow
      setPreviousArrowOpacity({ opacity: 0 });
      setPreviousArrowState("hide");
      setNextArrowState("show");
    } else if (cardsLeft.length === 0) {
      //remove next arrow
      setNextArrowOpacity({
        opacity: 0,
      });
      setNextArrowState("hide");
    } else {
      //show both arrows
      setPreviousArrowOpacity({ opacity: 1 });
      setPreviousArrowState("show");
      setNextArrowOpacity({
        opacity: 1,
      });
      setNextArrowState("show");
    }
  }, [cardsLeft, amountOfRawDataCards]);

  function nextCard() {
    setCardsRemoved([...cardsRemoved, cardsLeft[cardsLeft.length - 1]]);
    setCardsLeft(cardsLeft.slice(0, -1));
  }

  function previousCard() {
    setCardsLeft([...cardsLeft, cardsRemoved[cardsRemoved.length - 1]]);
    setCardsRemoved(cardsRemoved.slice(0, -1));
  }

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="title">Jordan Renaud Developer</h1>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 620 }}
        transition={{ delay: 2, duration: 3 }}
      >
        <motion.div
          className="card-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1.5 }}
        >
          <AnimatePresence>
            {cardsLeft.map((card, index) => (
              <Card
                key={card.front.title}
                cardData={card}
                placement={
                  index === cardsLeft.length - 1 ? "top" : "underneath"
                }
              />
            ))}
          </AnimatePresence>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <h2 className="title">Contact Me</h2>
            <p>
              <label>
                <input
                  className="text-input"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </label>
            </p>
            <p>
              <label>
                <input
                  className="text-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </label>
            </p>
            <p>
              <label>
                <textarea
                  className="text-input large"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </label>
            </p>
            <button className="send-form" type="submit">
              Send
            </button>
          </form>

          <div className="next-card-button-container">
            <motion.div
              className={`${previousArrowState}`}
              initial={{ opacity: 0 }}
              animate={previousArrowOpacity}
              transition={{ duration: 0.5 }}
            >
              <ArrowButton arrow={<LeftArrow />} onClick={previousCard} />
            </motion.div>
            <motion.div
              className={`${nextArrowState}`}
              initial={{ opacity: 1 }}
              animate={nextArrowOpacity}
              transition={{ duration: 0.5 }}
            >
              <ArrowButton
                arrow={<RightArrow toBeAnimated={true} />}
                onClick={nextCard}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <footer>
        {icons.map((icon, index) => (
          <LinkIcon
            key={index}
            iconTitle={icon.title}
            iconLink={icon.link}
            iconId={icon.id}
          />
        ))}
      </footer>
    </motion.div>
  );
}

export default App;
