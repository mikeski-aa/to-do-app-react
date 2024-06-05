import { useContext } from "react";
import { TaskContext } from "../App";
import { ListButton } from "./ListButton";
import { v4 as uuidv4 } from "uuid";
import { AddNewList } from "./AddNewList";

// navigation bar
// here, we want to give user the option to select which task folder they would like to see
// perhaps add other functionality like see today's tasks, or upcoming tasks?

// tempTask,
// setTempTask,
// currentTasks,
// setCurrentTasks,
// addNewTask,
// setNewTask,
// editTask,
// setEditTask,
// currentList,
// setCurrentList,
// showAddNewList,
// setShowNewList,
// tempListName,
// setTempListName,

function Nav() {
  const taskContext = useContext(TaskContext);

  const handleOpenNewList = () => {
    console.log(taskContext.currentTasks);
    taskContext.setTempListName({
      ...taskContext.tempListName,
      listId: uuidv4(),
    });
    taskContext.setShowNewList(true);
    console.log(taskContext.tempListName);
  };

  const handleOpenToday = () => {
    taskContext.setMainWindow("3");
  };

  const handleOpenUpcoming = () => {
    taskContext.setMainWindow("2");
  };

  return (
    <div className="navBar">
      <div className="header">
        <h2>Menu</h2>
      </div>
      <div className="tasks">
        Tasks
        <div className="upcomingTasks" onClick={handleOpenUpcoming}>
          <button>Upcoming</button>
        </div>
        <div className="todayTask">
          <button onClick={handleOpenToday}>Today</button>
        </div>
        <div className="overdueTask">
          <button>Overdue</button>
        </div>
      </div>

      <div className="lists">
        <div className="currentLists">
          Your Lists
          {taskContext.currentList.map((item) => (
            <ListButton
              listName={item.listName}
              key={item.listId}
              listId={item.listId}
            />
          ))}
        </div>
        <button onClick={handleOpenNewList}>Add New List</button>
        <AddNewList />
      </div>

      <div className="about">
        <button>About app</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export { Nav };
