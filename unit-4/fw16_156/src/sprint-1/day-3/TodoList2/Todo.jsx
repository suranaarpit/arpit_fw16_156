import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";
import "./Todo2.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const addData = () => {
    if (task.trim().length > 0) {
      let payload = {
        id: uuid(),
        title: task,
        status: false,
      };
      setTodo([...todo, payload]);
      setTask("");
    }
  };

  const deleteItem = (id) => {
    let newTodo = todo.filter((el) => {
      return el.id !== id;
    });
    setTodo(newTodo);
  };
  return (
    <div id="container">
      <h1 id="heading">Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Today's Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <div>
          <img
            src="https://flyclipart.com/thumb2/plus-math-icon-163346.png"
            className="Additem"
            onClick={addData}
            alt=""
          />
        </div>
      </div>

      <TodoList data={todo} deleteItem={deleteItem} />
    </div>
  );
};

export default Todo;
