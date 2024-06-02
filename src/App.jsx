import { useState } from "react";
import { ToDoItems } from "./components/ToDoDetails";
import { CreateNewTask } from "./components/NewTaskModal";
import { createContext, useContext } from "react";
import "./App.css";

export const TaskContext = createContext();

function App() {
  const [tempTask, setTempTask] = useState({
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "",
  });
  const [currentTasks, setCurrentTasks] = useState([]);
  return (
    <>
      <h1>To do app</h1>
      <ToDoItems />
      <TaskContext.Provider value={{ tempTask, setTempTask }}>
        <CreateNewTask />
      </TaskContext.Provider>
    </>
  );
}

export default App;
