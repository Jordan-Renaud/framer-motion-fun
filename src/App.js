import Card from "./Card";
import { useState } from "react";
import "./App.css";

const cardContent = ["card1", "card2", "card3"];

function App() {
  return (
    <div className="App">
      <h1 className="title">Jordan Renaud Developer</h1>

      {/* cards are displayed bottom to top */}
      <Card content={"top card"} />
      <Card content={"bottom card"} />
    </div>
  );
}

export default App;
