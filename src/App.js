import React, { useState } from "react";
import "./App.css"; // Add basic styling for the calculator

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = Function("return " + input)(); // Safer alternative to eval
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={handleClear} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <Input />
//       <Add />
//       <Sub />
//       <Mul />
//       <Div />
//     </div>
//   );
// }
// function Input() {
//   const [num,setnum]=useState(0)
//   console.log(num)

//   return (
//     <div>
//       <input type="number"  onChange={setnum()} />
//     </div>
//   );
// }

// function Add() {
//   return (
//     <div>
//       <button>addition</button>
//     </div>
//   );
// }
// function Sub() {
//   return (
//     <div>
//       <button>subtraction</button>
//     </div>
//   );
// }
// function Mul() {
//   return (
//     <div>
//       <button>multiply</button>
//     </div>
//   );
// }
// function Div() {
//   return (
//     <div>
//       <button>divide</button>
//     </div>
//   );
// }

// export default App;
