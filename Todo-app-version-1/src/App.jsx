import React from "react";
import TodoItem1 from "./Components/TodoItem1";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";

function App() {
  return (
    <>
      <center classNameName="todo-container">
        <AppName />
        <AddTodo />

        <div classNameName="items-container">
          <TodoItem1 />
          <TodoItem1 />
          <TodoItem1 />
        </div>
      </center>
    </>
  );
}

export default App;
