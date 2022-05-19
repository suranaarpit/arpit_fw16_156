import { useCallback, useState } from "react";
import { MemoTodoItem } from "./TodoItem";

export type TodoType = {
  id: number;
  title: string;
  status: boolean;
};
export const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState<TodoType[]>([]);

  const handleToggle = (id: number) => {
    setList(list.filter((e) => e.id !== id));
    setList(list.map((l) => (l.id === id ? { ...l, status: !l.status } : 1)));
  };
  const callback = useCallback(handleToggle, [list]);
  return (
    <div className="p-5">
      <input
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          outline: "none",
        }}
        className="border border-black p-2"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          outline: "none",
        }}
        className="border border-black p-2"
        onClick={() => {
          const payload: TodoType = {
            id: Math.random(),
            title: text,
            status: false,
          };
          setList([...list, payload]);
        }}
      >
        Add Todo
      </button>

      {list.map((t) => (
        <MemoTodoItem key={t.id} {...t} handleToggle={callback} />
      ))}
    </div>
  );
};
