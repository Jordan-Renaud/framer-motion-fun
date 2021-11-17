import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import LaptopGirl from "./images/girl-with-laptop";
import Arrow from "./images/arrow";
import LinkIcon from "./LinkIcon";
import easyRecipeCard from "./images/easy-recipes.png";
import weatherAppCard from "./images/weather-app.png";
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

//load back to front
const cardContentData = [
  {
    front: { title: "Weather Project", content: <img src={weatherAppCard} /> },
    back: {
      title: "Weather Project",
      content: [
        "Using: Vanilla JavaScript, HTML, CSS",
        "Design: Played with neumorphic design to give an apple-esk feel",
        "Learnt: API usage, manipulating the DOM, first project finished.",
      ],
      link: "https://weather-app-jrenaud.netlify.app/",
    },
  },
  {
    front: {
      title: "Component Based Recipes",
      content: <img src={easyRecipeCard} />,
      link: "https://easy-recipes-jr.netlify.app/",
    },
    back: {
      title: "Component Based Recipes",
      content: [
        "Idea: Easily being able to swap out ingredients in a meal.",
        "Using: React, HTMl, CSS",
        "Design: Simple and clean, focusing on usability. No ads to distract the user.",
        "Learnt: React Hooks, multiple page application, APIs, CSS grid.",
      ],
    },
  },
  {
    front: { title: "", content: <LaptopGirl /> },
    back: {
      title: "me",
      content: ["New Zealander Abroad in London, HTML, CSS, React, JavaScript"],
      link: "#",
    },
  },
];

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

            <p className="click-here">
              click here!
              <br />⮐
            </p>
          </motion.div>
        </motion.div>
        {/* <Arrow /> */}
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
