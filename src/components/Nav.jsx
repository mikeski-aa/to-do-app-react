import { useContext } from "react";
import { TaskContext } from "../App";
import { ListButton } from "./ListButton";
import { v4 as uuidv4 } from "uuid";
import { AddNewList } from "./AddNewList";
import { getUpcomingTasks } from "./Upcoming";
import "../styles/Nav.css";

// function to get number of upcoming tasks

// navigation bar
// here, we want to give user the option to select which task folder they would like to see
// perhaps add other functionality like see today's tasks, or upcoming tasks?

function Nav() {
  const taskContext = useContext(TaskContext);

  const upcomingTotal = getUpcomingTasks(taskContext, "7").length;

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

  const handleOpenOverdue = () => {
    taskContext.setMainWindow("4");
  };

  return (
    <div className="navBar">
      <div className="mainNav">
        <div className="header">
          <h2>Menu</h2>
        </div>
        <div className="tasks">
          <b>Tasks</b>
          <div className="taskButtonsContainer">
            <div className="upcomingTasks">
              <button className="tasksBtnsNav" onClick={handleOpenUpcoming}>
                Upcoming
              </button>
              <div className="upcomingTaskTotal">
                <b>{upcomingTotal}</b>
              </div>
            </div>
            <div className="todayTask">
              <button className="tasksBtnsNav" onClick={handleOpenToday}>
                Today
              </button>
            </div>
            <div className="overdueTask">
              <button className="tasksBtnsNav" onClick={handleOpenOverdue}>
                Overdue
              </button>
            </div>
          </div>
        </div>

        <div className="lists">
          <div className="currentLists">
            <b>Your Lists</b>
            {taskContext.currentList.map((item) => (
              <ListButton
                listName={item.listName}
                key={item.listId}
                listId={item.listId}
              />
            ))}
          </div>
          <button className="addNewListItemBtn" onClick={handleOpenNewList}>
            Add New List
          </button>
          <AddNewList />
        </div>
      </div>

      <div className="about">
        <button>About app</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export { Nav };
