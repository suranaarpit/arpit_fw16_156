import React from "react";
import styles from "./RTimer.module.css";

const TimerInput = ({ setMin }) => {
  return (
    <div className={styles.input}>
      <input
        type="number"
        placeholder="Enter Minutes"
        onChange={(e) => setMin(e.target.value)}
      />
    </div>
  );
};

export default TimerInput;
