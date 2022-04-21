import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disable, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div className="App">
      <button
        style={{ backgroundColor: disable ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disable}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor="enableButtonCheckbox">Disable button</label>
      <input id="enableButtonCheckbox" type="checkbox" onChange={() => setDisabled(!disable)} />
    </div>
  );
}

export default App;
