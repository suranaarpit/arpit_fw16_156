import React from "react";


export const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = React.useState("");


  const postTodo = async (value) => {
    let res = await fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "content-type": "application/json"},
      body: JSON.stringify({
        value,
        completed: false,
      })
    });

    let data = await res.json();
    onAdd(data);
  }
 
  return (
    <div>
      <input
      style={{ borderBottom: ".5px solid black", outline: "none" , marginLeft: "200px"}}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>

      <button
      style={{ borderBottom: ".5px solid black"}}
        onClick={() => {
          let value = newTodo.trim();
          if (value) {
            postTodo(value);
            setNewTodo("");
          }
        }}
      >Add</button>
      
    </div>
  );
};