import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Card from "./Card";
import "./App.css";

/* cards are displayed bottom to top */

const icons = [
  { id: "fa-facebook-square", link: "https://www.facebook.com/jordan.renaud3" },
  {
    id: "fa-instagram-square",
    link: "https://www.instagram.com/jordan__renaud/",
  },
  {
    id: "fa-twitter-square",
    link: "https://twitter.com/jordan_renaud",
  },
  {
    id: "fa-linkedin",
    link: "https://www.linkedin.com/in/jordan-renaud-064a8a167/",
  },
  {
    id: "fa-github-square",
    link: "https://github.com/Jordan-Renaud",
  },
];

function App() {
  return (
    <div className="App">
      <motion.div
        className="grid-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="title">Jordan Renaud Developer</h1>

        <footer>
          {icons.map((icon) => (
            <div className="link" key={icon.id}>
              <a href={icon.link} target="_blank" rel="noreferrer">
                <i className={`fab ${icon.id}`}></i>
              </a>
            </div>
          ))}
        </footer>
      </motion.div>
    </div>
  );
  // // const [deck, setDeck] = useState(["bottom", "middle", "top"]);
  // // const [flipped, setFlipped] = useState([]);

  // // function addToDeck() {
  // //   if (flipped.length > 0) {
  // //     setDeck([...deck, flipped.pop()]);
  // //   }
  // // }

  // // function flipCard() {
  // //   if (deck.length === 1) {
  // //     // reset deck to begining
  // //   } else {
  // //     setFlipped([...flipped, deck.pop()]);
  // //   }
  // // }

  // return (
  //   <div className="App">
  //     <h1 className="title">Jordan Renaud Developer</h1>
  //     <motion.div
  //     // className="card-container"
  //     // initial={{ scale: 0.8, opacity: 0 }}
  //     // animate={{ scale: 1, opacity: 1 }}
  //     // transition={{ ease: "easeIn", duration: 1 }}
  //     >
  //       <AnimateSharedLayout type="crossfade">
  //         {/* <div>
  //           {flipped.map((text) => (
  //             <Card
  //               deckSide={"back"}
  //               content={text}
  //               //handleCardState={addToDeck}
  //               key={text}
  //             />
  //           ))}
  //         </div> */}
  //         <div>
  //           {deck.map((text) => (
  //             <Card
  //               deckSide={"front"}
  //               content={text}
  //               //handleCardState={flipCard}
  //               key={text}
  //             />
  //           ))}
  //         </div>
  //       </AnimateSharedLayout>
  //     </motion.div>
  //   </div>
  // );
}

export default App;
