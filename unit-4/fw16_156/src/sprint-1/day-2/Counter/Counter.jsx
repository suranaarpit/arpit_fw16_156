import { useState } from "react";
import "./Counter.css";

const Func_Count = ({ value }) => {
  const [count, setCount] = useState(value);

  const handleClick = (value) => {
    setCount((pastCount) => pastCount + value);
  };

  const doubleCount = (value) => {
    setCount((pastCount) => pastCount * value);
  };

  let changeColor;
  count % 2 == 1 ? (changeColor = "red") : (changeColor = "green");

  return (
    <>
      <div className="mainDiv">
        <h1 id="counterHead">Counter</h1>
        <h3 style={{ color: changeColor }} id="counterValue">{count}</h3>
        <div className="btnDiv">
          <button id="btnOne" onClick={() => handleClick(1)}>
            +
          </button>
          <button id="btnTwo" onClick={() => handleClick(-1)}>
            -
          </button>
          <button id="btnThree" onClick={() => doubleCount(2)}>
            2x
          </button>
        </div>
      </div>
    </>
  );
};

export { Func_Count };
