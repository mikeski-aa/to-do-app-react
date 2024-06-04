import { useContext } from "react";
import { TaskContext } from "../App";
import { ListButton } from "./ListButton";
import { v4 as uuidv4 } from "uuid";

// navigation bar
// here, we want to give user the option to select which task folder they would like to see
// perhaps add other functionality like see today's tasks, or upcoming tasks?

//           tempTask,
// setTempTask,
// currentTasks,
// setCurrentTasks,
// addNewTask,
// setNewTask,
// editTask,
// setEditTask,
// currentList,
// setCurrentList,

function Nav() {
  const taskContext = useContext(TaskContext);

  return (
    <div className="navBar">
      <div className="header">
        <h2>Menu</h2>
      </div>
      <div className="tasks">
        <div className="upcomingTasks">
          <button>Upcoming</button>
        </div>
        <div className="todayTask">
          <button>Today</button>
        </div>
      </div>

      <div className="lists">
        <div className="currentLists">
          {taskContext.currentList.map((item) => (
            <ListButton listName={item.listName} key={uuidv4()} />
          ))}
        </div>
        <button>Add New List</button>
      </div>

      <div className="about">
        <button>About app</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export { Nav };
