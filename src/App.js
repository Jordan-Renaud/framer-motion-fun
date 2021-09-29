import Card from "./Card";
import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <Card
        clicked={isClicked}
        onClick={() => setIsClicked((isClicked) => !isClicked)}
      />
    </div>
  );
}

export default App;
