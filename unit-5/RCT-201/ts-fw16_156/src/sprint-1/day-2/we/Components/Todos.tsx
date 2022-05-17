import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios, { AxiosResponse } from "axios";
// npm install --save-dev @types/packagename;

type TodoType = {
  id: string;
  title: string;
  status: boolean;
};

const Todos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((response: AxiosResponse<TodoType[]>) => {
        const { data } = response;
        console.log("data:", data);
        setTodos(data);
      });
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          const payload = { id: uuid(), title: text, status: false };
          //   setTodos([...todos, payload]);
          axios.post("http://localhost:8080/todos", payload).then(getData);
        }}
      >
        Add Todo
      </button>
      {todos.map((t) => {
        return (
          <div key={t.id}>
            {t.title} - {t.status ? "Done" : "Not Done"}
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
