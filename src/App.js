import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { icons, rawCardData } from "./data";
import Card from "./Card";
import ArrowButton from "./ArrowButton";
import Arrow from "./images/arrow";
import RightArrow from "./images/rightArrow";
import LinkIcon from "./LinkIcon";
import "./App.css";

function App() {
  const amountOfRawDataCards = rawCardData.length;

  const [cardsLeft, setCardsLeft] = useState(rawCardData);
  const [cardsRemoved, setCardsRemoved] = useState([""]);
  const [clickHereOpacity, setclickHereOpacity] = useState({ opacity: 1 });

  //check to see if click here arrow should be displayed
  useEffect(() => {
    cardsLeft.length === amountOfRawDataCards
      ? setclickHereOpacity({ opacity: 1 })
      : setclickHereOpacity({ opacity: 0 });
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
          {cardsLeft.map((card, index) => (
            <Card
              key={card.front.title}
              cardData={card}
              placement={index === cardsLeft.length - 1 ? "top" : "underneath"}
            />
          ))}

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <h2 className="handwriting-heading">Contact Me</h2>
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

          <motion.div
            className="click-here"
            initial={{ opacity: 1 }}
            animate={clickHereOpacity}
            transition={{ duration: 1.5 }}
          >
            click here!
            <div className="small-arrow">
              <Arrow />
            </div>
          </motion.div>

          <div className="next-card-button-container">
            <ArrowButton arrow={<Arrow />} onClick={previousCard} />
            <ArrowButton arrow={<RightArrow />} onClick={nextCard} />
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
