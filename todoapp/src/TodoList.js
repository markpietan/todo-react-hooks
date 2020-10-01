import React from "react";
import Todo from "./Todo"
const TodoList = ({ todos, setTodos, toggleTodoCompleted, deleteTodo}) => {
  return (
    <section>
      {todos.map(function (e, index) {
        return <Todo deleteTodo= {deleteTodo} toggleTodoCompleted= {toggleTodoCompleted} key={index} name = {e.name} priority= {e.priority} completed= {e.completed}></Todo>;
      })}
    </section>
  );
};

export default TodoList;
