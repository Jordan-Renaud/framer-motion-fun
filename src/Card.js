import "./Card.css";
import { motion } from "framer-motion";
import LaptopLady from "./images/girl-with-laptop.js";

const variants = {
  preClick: { rotateY: 0, x: 0 },
  postClick: { rotateY: 180, x: -300 },
};

export default function Card({ clicked, onClick }) {
  console.log(clicked);
  return (
    <motion.div
      className="Card"
      onClick={onClick}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
      initial={{ rotateY: 0, x: 0 }}
      animate={clicked ? "postClick" : "preClick"}
      variants={variants}
      transition={{ duration: 3 }}
    >
      <LaptopLady className="back" />
    </motion.div>
  );
}
