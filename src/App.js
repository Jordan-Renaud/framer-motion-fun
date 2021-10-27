import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Card from "./Card";
import LaptopGirl from "./images/girl-with-laptop";
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

const cardContent = [
  {
    front: { title: "", content: <LaptopGirl /> },
    back: { title: "me", content: "gg" },
  },
];

function App() {
  return (
    <div className="App">
      <motion.div
        className="grid-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="title">Jordan Renaud Developer</h1>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 575 }}
          transition={{ delay: 2, duration: 3 }}
        >
          <motion.div
            className="card-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1.5 }}
          >
            <Card front={cardContent[0].front} back={cardContent[0].back} />
            <p className="click-here">
              click here!
              <br />⮐
            </p>
          </motion.div>
        </motion.div>
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
}

export default App;
