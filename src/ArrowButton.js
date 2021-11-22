import { motion } from "framer-motion";
import "./ArrowButton.css";

export default function ArrowButton({ arrow, onClick }) {
  return (
    <motion.button
      className="ArrowButton"
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      {arrow}
    </motion.button>
  );
}
