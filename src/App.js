import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Card from "./Card";
import "./App.css";

/* cards are displayed bottom to top */

function App() {
  const [deck, setDeck] = useState(["bottom", "middle", "top"]);
  const [flipped, setFlipped] = useState([]);

  function addToDeck() {
    if (flipped.length > 0) {
      setDeck([...deck, flipped.pop()]);
    }
  }

  function flipCard() {
    if (deck.length === 1) {
      // reset deck to begining
    } else {
      setFlipped([...flipped, deck.pop()]);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Jordan Renaud Developer</h1>
      <motion.div
        className="card-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <AnimateSharedLayout type="crossfade">
          <div>
            {flipped.map((text) => (
              <Card
                deckSide={"back"}
                content={text}
                handleCardState={addToDeck}
                key={text}
              />
            ))}
          </div>
          <div>
            {deck.map((text) => (
              <Card
                deckSide={"front"}
                content={text}
                handleCardState={flipCard}
                key={text}
              />
            ))}
          </div>
        </AnimateSharedLayout>
      </motion.div>
    </div>
  );
}

export default App;
