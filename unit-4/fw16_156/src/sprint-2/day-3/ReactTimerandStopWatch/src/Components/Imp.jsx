import React, { useState } from "react";
import Stopwatch from "./ReactStopwatch";
import Timer from "./ReactTimer";
import styles from "./Imp.module.css";
import Example from "./Features";

const Main = () => {
  const [show, setShow] = useState(true);
  return (
    <>
    <Example></Example>
    <div style={{color: "white", width: "300px", margin: "auto", marginTop: "80px", fontSize: "25px"}}><marquee direction="top">Google Timer & Stopwatch</marquee></div>
      <div className={styles.container}>
        <div className={styles.nav}>
          <button
            className={show ? styles.active : ""}
            onClick={() => setShow(true)}
          >
            Timer
          </button>
          <button
            className={show ? "" : styles.active}
            onClick={() => setShow(false)}
          >
            Stopwatch
          </button>
        </div>
        <div className={styles.main}>{show ? <Timer /> : <Stopwatch />}</div>
      </div>
    </>
  );
};

export default Main;
