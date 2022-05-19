import { useState, useMemo } from "react";

const PO = () => {
  const [text, setText] = useState("");

  const fibo = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    return fibo(n - 1) + fibo(n - 2);
  };
  const memoisedFibo = useMemo(() => fibo(Number(text)), [text]);

  const calcFibo = () => {
    // console.time("t1")
    console.log("nth Fibo", memoisedFibo);
    // console.timeEnd("t2")
  };

  return (
    <div className="p-5">
      <div>
        <h1>Fib of n</h1>
      </div>
      <input
        className="border border-black p-2"
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          outline: "none",
        }}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="border border-black p-2"
        onClick={calcFibo}
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          outline: "none",
        }}
      >
        Calculate
      </button>
    </div>
  );
};

export default PO;

export const Potwo = () => {
  const [num, setNum] = useState(20);
  const [counter, setCounter] = useState(0);

  const fibo2 = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    return fibo2(n - 1) + fibo2(n - 2);
  };
  console.time("t1");
  const nthFibo = useMemo(() => fibo2(num), [num]);
  console.timeEnd("t1");

  return (
    <div>
      <h4>Fibo of {num}</h4>
    </div>
  );
};
