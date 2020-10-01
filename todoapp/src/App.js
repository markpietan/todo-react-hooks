import React, { useState, useEffect } from "react";
import InputBar from "./InputBar";
import { API_KEY } from "./secret";
import "./App.css";
import TodoList from "./TodoList";
import { photoSearch } from "./api/unsplashapi";
import InputBarPicture from "./inputBarPicture";
import PhotoList from "./PhotoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [results, setResults] = useState([]);
  const [background, setBackground] = useState("");
  useEffect(() => {
    let stringTodos = localStorage.getItem("todos");
    let parsedTodos = JSON.parse(stringTodos);
    if (parsedTodos !== null) {
      console.log(parsedTodos);
      setTodos(parsedTodos);
    }

    console.log(API_KEY);
    let data = photoSearch();
    console.log(data);
  }, []);
  function toggleTodoCompleted(name) {
    const copy = todos.slice();
    const currentTodo = copy.find(function (e) {
      if (name === e.name) {
        return true;
      }
      return false;
    });
    console.log(currentTodo);
    currentTodo.completed = !currentTodo.completed;
    setTodos(copy);
    localStorage.setItem("todos", JSON.stringify(copy));
  }
  function deleteTodo(name) {
    const copy = todos.slice();
    const deleteNumber = todos.findIndex(function (e) {
      if (name === e.name) {
        return true;
      }
      return false;
    });
    console.log(deleteNumber);
    copy.splice(deleteNumber, 1);
    console.log(copy);
    setTodos(copy);
    localStorage.setItem("todos", JSON.stringify(copy));
  }

  async function submitPictureForm(text) {
    const response = await photoSearch(text);
    console.log(response);
    setResults(response.results)
  }

  const backgroundStyles = {
    background: `url(${background}) no-repeat center center fixed`
  }

  console.log(backgroundStyles)
  function addTodo(name, priority) {
    const copy = [...todos];
    copy.push({ name, priority: "low", completed: false });
    setTodos(copy);
    localStorage.setItem("todos", JSON.stringify(copy));
  }
  return (
    <main style= {background !== "" ? backgroundStyles : {}}>
      <InputBar addTodo={addTodo}></InputBar>
      <TodoList
        deleteTodo={deleteTodo}
        toggleTodoCompleted={toggleTodoCompleted}
        setTodos={setTodos}
        todos={todos}
      ></TodoList>
      <InputBarPicture submitPictureForm={submitPictureForm}></InputBarPicture>
      {/* <PictureList></PictureList> */}
      <PhotoList results= {results} setBackground= {setBackground}></PhotoList>
    </main>
  );
}

export default App;
