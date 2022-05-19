import { memo } from "react";
import { TodoType } from "./Todo";

type TodoItemProps = {
  handleToggle: (s: number) => void;
};

export const TodoItem = (props: TodoType & TodoItemProps) => {
  console.log("Rendering todoitem for", props.title);

  return (
    <div>
      {props.title} - {props.status ? "Done" : "Not Done"}
      <button
        className="border border-black p-2"
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          outline: "none",
        }}
        onClick={() => props.handleToggle(props.id)}
      >
        Toggle
      </button>
    </div>
  );
};

export const MemoTodoItem = memo(TodoItem);
