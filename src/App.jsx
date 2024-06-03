import { useState } from "react";
import { ToDoItems } from "./components/ToDoDetails";
import { CreateNewTask } from "./components/NewTaskModal";
import { createContext, useContext } from "react";
import { EditTask } from "./components/EditTask";
import "./App.css";

export const TaskContext = createContext();

function App() {
  const [tempTask, setTempTask] = useState({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "",
  });
  const [currentTasks, setCurrentTasks] = useState([]);
  const [addNewTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  return (
    <>
      <h1>To do app</h1>
      <TaskContext.Provider
        value={{
          tempTask,
          setTempTask,
          currentTasks,
          setCurrentTasks,
          addNewTask,
          setNewTask,
          editTask,
          setEditTask,
        }}
      >
        <ToDoItems />
        <CreateNewTask />
        <EditTask />
      </TaskContext.Provider>
    </>
  );
}

export default App;
