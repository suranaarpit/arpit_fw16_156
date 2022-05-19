import { useEffect, useState } from "react";

export const UseTimeOut = (delay: number) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let id = setTimeout(() => {
      setReady(true);
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);

  return ready;
};