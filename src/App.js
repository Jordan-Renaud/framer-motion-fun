import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Card from "./Card";
import LaptopGirl from "./images/girl-with-laptop";
import LinkIcon from "./LinkIcon";
import "./App.css";

/* cards are displayed bottom to top */

const icons = [
  {
    id: "fa-facebook-square",
    link: "https://www.facebook.com/jordan.renaud3",
    title: "Facebook",
  },
  {
    id: "fa-instagram-square",
    link: "https://www.instagram.com/jordan__renaud/",
    title: "Instagram",
  },
  {
    id: "fa-twitter-square",
    link: "https://twitter.com/jordan_renaud",
    title: "Twitter",
  },
  {
    id: "fa-linkedin",
    link: "https://www.linkedin.com/in/jordan-renaud-064a8a167/",
    title: "LinkedIn",
  },
  {
    id: "fa-github-square",
    link: "https://github.com/Jordan-Renaud",
    title: "GitHub",
  },
];

const cardContent = [
  {
    front: { title: "", content: <LaptopGirl /> },
    back: {
      title: "me",
      content: "New Zealander Abroad in London, HTML, CSS, React, JavaScript",
    },
  },
  {
    front: { title: "project 1", content: "image" },
    back: {
      title: "project 1",
      content: "this is what the project is",
    },
  },
  {
    front: { title: "project 2", content: "image" },
    back: {
      title: "project 2",
      content: "this is what the project is",
    },
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
            {/* <Card front={cardContent[0].front} back={cardContent[0].back} /> */}
            {cardContent.map((card, index) => (
              <Card
                key={index}
                front={card.front}
                back={card.back}
                placement={
                  index === cardContent.length - 1 ? "top" : "underneath"
                }
              />
            ))}
            <p className="click-here">
              click here!
              <br />⮐
            </p>
          </motion.div>
        </motion.div>
        <footer>
          {icons.map((icon) => (
            <LinkIcon
              iconTitle={icon.title}
              iconLink={icon.link}
              iconId={icon.id}
            />
          ))}
        </footer>
      </motion.div>
    </div>
  );
}

export default App;
