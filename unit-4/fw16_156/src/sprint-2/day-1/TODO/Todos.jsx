import React from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

export const Todos = () => {

  const [todos, setTodos] = React.useState([]);

  const [pageNo, setPageNo] = React.useState(1);

  const onAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const onDelete = (id) => {
    let newTodos = todos.filter((todo) =>  todo.id !== id);
    setTodos(newTodos);
  }

  const onEdit = (newTodo) => {
    let newTodos = todos.map((todo) => {
      if(todo.id === newTodo.id)  return newTodo;
      else return todo;
    });

    setTodos(newTodos);
  }


  React.useEffect(() => {

    const getTodos = async () => {
      try
      {
        let res = await fetch(`http://localhost:8080/todos?_page=${pageNo}`);
        let data = await res.json();
       
        setTodos(data);
      } 
      catch (err)
      {
        console.log(err);
      }
    };

    getTodos();
  }, [pageNo]);

  return (
    <div style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "150px" }}>
      {pageNo}
      <AddTodo onAdd={onAdd} />
      {todos.map((ele) => (
        <Todo key={ele.id} todo={ele} onDelete={onDelete} onEdit={onEdit} />
      ))}

      <button style={{ marginLeft: "20px", borderBottom: ".5px solid black", marginTop: "15px" }} onClick={() => {if(pageNo>1){
        setPageNo(pageNo - 1)
      }}}>Prev</button>

      <button style={{ marginLeft: "20px", borderBottom: ".5px solid black" }} onClick={() => setPageNo(pageNo + 1)}>Next</button>
    </div>
  );
};