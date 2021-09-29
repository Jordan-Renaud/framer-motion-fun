import { motion } from "framer-motion";
import LaptopLady from "./images/girl-with-laptop.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <motion.div
        className="card"
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
      >
        <LaptopLady className="back" />
      </motion.div>

      <motion.button
        className="next-button"
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.3 },
        }}
      >
        -->
      </motion.button>
    </div>
  );
}

export default App;

//className="card"
