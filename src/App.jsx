import { useState } from "react";
import { ToDoItems } from "./components/ToDoDetails";
import { CreateNewTask } from "./components/NewTaskModal";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState(false);
  const [currentTasks, setCurrentTasks] = useState([]);
  return (
    <>
      <h1>To do app</h1>
      <ToDoItems />
      <CreateNewTask />
    </>
  );
}

export default App;
