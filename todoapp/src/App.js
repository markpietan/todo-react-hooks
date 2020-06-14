import React, { useState } from "react";
import InputBar from "./InputBar";

import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      name: "walk the dog",
    },
    {
      name: "buy groceries",
    },
    {
      name: "go to the gym",
    },
  ]);
  function addTodo(name){
   const copy = [...todos]
   debugger
   copy.push({name})
   setTodos(copy)
  }
  return (
    <main>
      <InputBar addTodo = {addTodo}></InputBar>
      <TodoList todos= {todos}></TodoList>
    </main>
  );
}

export default App;
