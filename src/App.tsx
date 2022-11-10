import React, { useState } from "react";
import logo from "./logo.svg";
import { FormOfTodo } from "./components/FormOfTodo/FormOfTodo";
import "./App.css";
import { ListOfNote } from "./components/ListOfNote/ListOfNote";
import { Todo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App">
      <FormOfTodo setTodos={setTodos} />
      <ListOfNote todos={todos} />
    </div>
  );
}

export default App;
