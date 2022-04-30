import React from "react";
import styles from "./Todo.module.css";

export const Todo = ({ todo, onDelete, onEdit }) => {

  const [isEditable, setIsEditable] = React.useState(false);

  const [value, setValue] = React.useState(todo.value);

  const handleDelete = async () => {
    await fetch(`http://localhost:8080/todos/${todo.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });

    onDelete(todo.id);
  };

  const handleEdit = async () => {
    let res = await fetch(`http://localhost:8080/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        value,
        completed: true,
      }),
    });

    let data = await res.json();
    onEdit(data);

  };
  return (
    <div
    style={{ marginTop: "50px" }}
      className={`${todo.completed ? styles.linethrough : ""}`}
    >
      {isEditable ? (
        <div>
          <input
            type="text"
            style={{ borderBottom: ".5px solid black", outline: "none" , marginLeft: "200px"}}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button
          style={{ borderBottom: ".5px solid black"}}
            onClick={() => {
              let v = value.trim();
              if (v) {
                handleEdit(v);
                setIsEditable(false);
              }
            }}
          >Update</button>
        </div>
      ) : (
        <div style={{ fontWeight: "bold", marginLeft: "20px" }}>{todo.value}</div>
      )}

      <div style={{  marginTop: "15px" }}>
        <button style={{ marginLeft: "20px", borderBottom: ".5px solid black" }} onClick={() => setIsEditable(!isEditable)}>Edit</button>
        <button style={{ marginLeft: "20px", borderBottom: ".5px solid black" }}  onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};