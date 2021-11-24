import { motion } from "framer-motion";
import "./ArrowButton.css";

export default function ArrowButton({ arrow, onClick }) {
  return (
    <motion.button
      className="ArrowButton"
      onClick={onClick}
      onHoverStart={(e) => {}}
    >
      {arrow}
    </motion.button>
  );
}
