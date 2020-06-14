import React from "react";
import Todo from "./Todo"
const TodoList = ({ todos }) => {
  return (
    <section>
      {todos.map(function (e, index) {
        return <Todo key={index} name = {e.name}></Todo>;
      })}
    </section>
  );
};

export default TodoList;
