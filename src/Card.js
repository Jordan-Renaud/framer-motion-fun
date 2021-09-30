import "./Card.css";
import { motion } from "framer-motion";
import { useState } from "react";
import LaptopLady from "./images/girl-with-laptop.js";

const variants = {
  preClick: { rotateY: 0, x: 0 },
  postClick: { rotateY: 180, x: -500 },
};

export default function Card({ content }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="Card"
      onClick={() => setIsClicked((isClicked) => !isClicked)}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
      initial={{ rotateY: 0, x: 0 }}
      animate={isClicked ? "postClick" : "preClick"}
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <LaptopLady className="back" />
      <p>{content}</p>
    </motion.div>
  );
}
