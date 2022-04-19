import React from "react";
import TodoItem from "./TodoItems";

const TodoList = ({ data, deleteItem }) => {
  return (
    <>
      {data.map((item) => {
        return <TodoItem key={item.id} {...item} dltItem={deleteItem} />;
      })}
    </>
  );
};

export default TodoList;