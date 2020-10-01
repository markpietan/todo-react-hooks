import React from "react";
import "./Todo.css";

const Todo = ({
  name,
  priority,
  completed,
  toggleTodoCompleted,
  deleteTodo,
}) => {
  const style = {};

  if (completed === true) {
    style.textDecoration = "line-through";
  }
  if (priority === "high") {
    style.background = "red";
  } else if (priority === "medium") {
    style.background = "orange";
  } else {
    style.background = "green";
  }
  return (
    <div>
      <span
        onClick={function () {
          deleteTodo(name);
        }}
      >
        X
      </span>
      <p
        className="todo"
        style={style}
        onClick={() => {
          toggleTodoCompleted(name);
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default Todo;
