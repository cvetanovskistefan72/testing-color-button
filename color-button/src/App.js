import { useState } from "react";
import "./App.css";

export const replaceCamelCaseWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [disable, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div className="App">
      <button
        style={{ backgroundColor: disable ? "Gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disable}
      >
        Change to {replaceCamelCaseWithSpaces(newButtonColor)}
      </button>
      <label htmlFor="enableButtonCheckbox">Disable button</label>
      <input id="enableButtonCheckbox" type="checkbox" onChange={() => setDisabled(!disable)} />
    </div>
  );
}

export default App;
