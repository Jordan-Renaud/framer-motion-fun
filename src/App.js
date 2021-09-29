import { motion } from "framer-motion";
import { useState } from "react";
import LaptopLady from "./images/girl-with-laptop.js";
import "./App.css";

const variants = {
  preClick: { opacity: 1, x: 0 },
  postClick: { opacity: 0, x: "-100%" },
};

function App() {
  const [isClicked, setIsClicked] = useState("false");

  function handleClick(event) {
    event.preventDefault();
    console.log("clicked");
  }

  return (
    <div className="App">
      <motion.div
        className="card"
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
        initial={{ rotateY: 0, x: 0 }}
        animate={{ rotateY: 180, x: -300 }}
        transition={{ duration: 3 }}
      >
        <LaptopLady className="back" />
      </motion.div>

      <button className="next-button" onClick={handleClick}>
        --{">"}
      </button>
    </div>
  );
}

export default App;
