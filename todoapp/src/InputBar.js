import React, { useState } from "react";

const InputBar = ({ addTodo }) => {
  const [text, setText] = useState("");
  function onUserType(e) {
    setText(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);
      }}
    >
      <input
        type="text"
        placeholder="Enter a Todo"
        value={text}
        onChange={onUserType}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default InputBar;
