import { TaskContext } from "../App";

// navigation bar
// here, we want to give user the option to select which task folder they would like to see
// perhaps add other functionality like see today's tasks, or upcoming tasks?

function Nav() {
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
        <div className="currentLists"></div>
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
