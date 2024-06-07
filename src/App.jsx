import { useState } from "react";
import { ToDoItems } from "./components/ToDoDetails";
import { CreateNewTask } from "./components/NewTaskModal";
import { createContext } from "react";
import { EditTask } from "./components/EditTask";
import { Nav } from "./components/Nav";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Today } from "./components/Today";
import { Upcoming } from "./components/Upcoming";
import { Overdue } from "./components/Overdue";
import { Settings } from "./components/Settings";
import { getPlaceholderTaskState } from "./components/placeholderValues";
import "./App.css";

export const TaskContext = createContext();

function App() {
  // for date setting for the initial tasks to be displayed

  console.log(getPlaceholderTaskState());

  // placeholder list to show on startup and for testing
  // this is where all of the lists live with their associated IDs
  const [currentList, setCurrentList] = useState([
    {
      listName: "Placeholder List",
      listId: "jhasd7861j",
    },
  ]);

  // temp task state - used as temp holder for state edits.
  // default values assigned for taskPrio, taskCompleted and taskBelongTo to prevent undefined assignment upon submission
  const [tempTask, setTempTask] = useState({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "1",
    taskCompleted: false,
    taskBelongTo: currentList[0].listId,
    taskDetailShow: false,
  });

  // this is where all the tasks live - one large state.
  // is this the best solution? IDK.
  // date format has to be in YYYY-MM-DD for date input to work
  const [currentTasks, setCurrentTasks] = useState(getPlaceholderTaskState());
  // state to control visibility of add new task section
  const [addNewTask, setNewTask] = useState(false);
  // state to control visibility of edit task section
  const [editTask, setEditTask] = useState(false);
  // state to control visibility of adding new list item box
  const [showAddNewList, setShowNewList] = useState(false);
  // temp list item for creating and generating a key for a new list item
  const [tempListName, setTempListName] = useState({
    listName: "",
    listId: "",
  });
  // state for controlling the currently active list -> i.e the list that will be displayed first.
  // set to a default value of the placeholder items, pointing at the first element of the list array
  // this ensures on startup, this field will be displaying SOMETHING.
  const [activeList, setActiveList] = useState({
    activeName: currentList[0].listName,
    activeId: currentList[0].listId,
  });

  // state for selecting which window to display deepnding on what is being selected.
  // 1 = welcome window, 2 = upcoming, 3 = today, 4 = overdue, 5 = display list items
  const [mainWindow, setMainWindow] = useState("1");

  // date state which can be toggled by user
  const [dateFormat, setDateFormat] = useState("EU");

  // state for settings modal
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <h1 className="titleOfPage">To do app</h1>

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
          mainWindow,
          setMainWindow,
          dateFormat,
          setDateFormat,
          showSettings,
          setShowSettings,
        }}
      >
        <Settings />
        <div className="mainStuff">
          <Nav />
          <ToDoItems />
          <WelcomeScreen />
          <Today />
          <Upcoming />
          <Overdue />
          <EditTask />
        </div>
      </TaskContext.Provider>
    </>
  );
}

export default App;
