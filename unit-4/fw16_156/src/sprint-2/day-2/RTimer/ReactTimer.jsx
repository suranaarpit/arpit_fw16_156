import React, { useEffect, useState } from "react";
import Timer from "./Timer.css"

const ReactTimer = ({ startTime, endTime }) => {
  const [time, setTime] = useState(startTime);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((previousTime) => {
        if (previousTime === endTime) {
          clearInterval(id);
          return previousTime;
        } else {
          return previousTime + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Interval Cleared");
    };
  }, [time, endTime]);

  return (
    <>
      <div className="mainDivTimer">
        <h1>React Timer</h1>
        <div className="timerSec"><h2>{time}s</h2></div>
        <button className="resetBtn" onClick={() => setTime(0)}>Reset</button>
      </div>
      <br />
      <br />
      <div id="marquee">
          <marquee direction="top">The timer will automatically stops after 30 sec, You can reset it by clicking reset button.</marquee>
      </div>
    </>
  );
};

export default ReactTimer;