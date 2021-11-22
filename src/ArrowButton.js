import { motion } from "framer-motion";
import "./ArrowButton.css";

export default function ArrowButton({ arrow }) {
  return (
    <motion.button
      className="ArrowButton"
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {
        console.log(e);
      }}
      onHoverEnd={(e) => {}}
    >
      {arrow}
    </motion.button>
  );
}
