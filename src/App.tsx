import "./App.css";
import PostInput from "./components/PostInput";
import PostList from "./components/PostList";


function App() {

  return (
    <>
      <h1>Vite + Vitest</h1>
      {/* <TodoList /> */}
      <PostList />
      <PostInput />
    </>
  );
}

export default App;
