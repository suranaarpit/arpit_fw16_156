import { useState } from "react";

type CounterProps = {
  init?: number;
  children?: JSX.Element | JSX.Element[];
//   onClick: (x: string, y: number) => string;
  onClick: () => void;
};

const Counter = (props: CounterProps) => {
  const { init = 15, children } = props;
  const [Counter, setCounter] = useState(init);
  return (
    <div>
      <h3>Counter: {Counter}</h3>
      {children}
      <button onClick={() => setCounter(Counter + 1)}>Add 1</button>
    </div>
  );
};

export default Counter;
