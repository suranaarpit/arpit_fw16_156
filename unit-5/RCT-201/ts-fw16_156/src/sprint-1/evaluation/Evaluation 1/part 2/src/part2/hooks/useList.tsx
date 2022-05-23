import { useState } from "react";

export const useList = (initialValue: any) => {
  const [list, setList] = useState(initialValue);
  const pop = () => {
    list.pop();
    setList([...list]);
  };
  const push = (payload: number) => {
    list.push(payload);
    setList([...list]);
  };
  const clear = () => {
    setList(list.length === 0);
  };
  const reset = () => {
    setList([1, 2, 3, 4]);
  };
  const map = () => {
    setList(
      list.map((el: number) => {
        return 2 * el;
      })
    );
  };
  return [list, { push, pop, clear, reset, map }];
};
