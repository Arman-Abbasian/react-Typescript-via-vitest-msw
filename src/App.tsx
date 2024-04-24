import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => {
        res.json();
      })
      .then((res:any) => {
        console.log(res)
      });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {todos.length && <div>Todo List : {todos.length}</div>}
      </div>
      {/* <TodoList /> */}
      {/* <PostList /> */}
      {/* <PostInput /> */}
    </>
  );
}

export default App;
