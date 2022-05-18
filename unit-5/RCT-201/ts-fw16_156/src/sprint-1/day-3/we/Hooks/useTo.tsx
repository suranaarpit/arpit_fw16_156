import { useEffect, useState } from "react";

export const UseTimeout = (delay: number) => {
  const [toShow, setToShow] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      setToShow(true);
    }, delay * 1000);

    return () => clearTimeout(id);
  }, []);
  return toShow;
};