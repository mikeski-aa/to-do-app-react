import { useState } from "react";
import { ToDoItems } from "./components/ToDoDetails";
import { CreateNewTask } from "./components/NewTaskModal";
import { createContext } from "react";
import { EditTask } from "./components/EditTask";
import { Nav } from "./components/Nav";
import "./App.css";

export const TaskContext = createContext();

function App() {
  // placeholder list to show on startup and for testing
  const [currentList, setCurrentList] = useState([
    {
      listName: "Placeholder List",
      listId: "jhasd7861j",
    },
  ]);
  const [tempTask, setTempTask] = useState({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "1",
    taskCompleted: false,
    taskBelongTo: currentList.listId,
  });
  const [currentTasks, setCurrentTasks] = useState([
    {
      taskId: "15351355",
      taskName: "Placeholder Name",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-01-01",
      taskPrio: "3",
      taskCompleted: true,
      taskBelongTo: "jhasd7861j",
    },
    {
      taskId: "153513535",
      taskName: "Placeholder Name",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-01-01",
      taskPrio: "3",
      taskCompleted: true,
      taskBelongTo: "jhasd7861j",
    },
    {
      taskId: "153513554",
      taskName: "Placeholder Name",
      taskDesc: "Placeholder Desc",
      taskDate: "2024-01-01",
      taskPrio: "3",
      taskCompleted: true,
      taskBelongTo: "jhasd7861j",
    },
  ]);
  const [addNewTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const [showAddNewList, setShowNewList] = useState(false);
  const [tempListName, setTempListName] = useState({
    listName: "",
    listId: "",
  });
  const [activeList, setActiveList] = useState({
    activeName: "Placeholder List",
    activeId: "jhasd7861j",
  });

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
          currentList,
          setCurrentList,
          showAddNewList,
          setShowNewList,
          tempListName,
          setTempListName,
          activeList,
          setActiveList,
        }}
      >
        <div className="mainStuff">
          <Nav />
          <ToDoItems />
          <CreateNewTask />
          <EditTask />
        </div>
      </TaskContext.Provider>
    </>
  );
}

export default App;
