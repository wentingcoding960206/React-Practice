import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddButton from "./addButton.jsx";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  console.log('start');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if(storedTodos) {
      const parsedTodos = JSON.parse(storedTodos)
      setTodos(parsedTodos)
      console.log("Loaded todos:", parsedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Todo List App</h1>
        <AddButton
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
