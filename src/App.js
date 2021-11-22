import { useState } from "react";
import { motion } from "framer-motion";
import { icons, cardContentData } from "./data";
import Card from "./Card";
import ArrowButton from "./ArrowButton";
import Arrow from "./images/arrow";
import RightArrow from "./images/rightArrow";
import LinkIcon from "./LinkIcon";
import "./App.css";

function App() {
  const [cardClickCount, setCardClickCount] = useState(0);
  const [cardContent, setCardContent] = useState(cardContentData);

  function addClick() {
    setCardClickCount(cardClickCount + 1);
    console.log(cardClickCount);
    if (cardClickCount % 2 === 1) {
      console.log("send card to back");
      setCardContent(cardContent.slice(0, -1));
    }
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
          {cardContent.map((card, index) => (
            <Card
              addClickCount={addClick}
              key={index}
              front={card.front}
              back={card.back}
              placement={
                index === cardContent.length - 1 ? "top" : "underneath"
              }
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

          <div className="click-here">
            click here!
            <div className="small-arrow">
              <Arrow />
            </div>
          </div>

          <div className="next-card-button-container">
            <ArrowButton arrow={<Arrow />} />
            <ArrowButton arrow={<RightArrow />} />
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
