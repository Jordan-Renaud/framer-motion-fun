import "./Card.css";
import { motion } from "framer-motion";
import LaptopLady from "./images/girl-with-laptop.js";

const variants = {
  preClick: { rotateY: 0 },
  postClick: { rotateY: 180 },
};

export default function Card() {
  return (
    <div className="Card"></div>

    // <motion.div
    // layout
    // layoutId={content}
    // className={`Card ${deckSide}`}
    // onClick={handleCardState}
    // whileHover={{
    //   scale: 1.01,
    //   transition: { duration: 0.3 },
    // }}
    // initial={deckSide === "front" ? "postClick" : "preClick"}
    // animate={deckSide === "back" ? "postClick" : "preClick"}
    // variants={variants}
    // transition={{ duration: 1.5 }}
    // >
    // <div className="card-face card-side-front">
    //   <p>{content}</p>
    // </div>
    // <div className="card-face card-side-back">
    //   <LaptopLady />
    // </div>
    // </motion.div>
  );
}
