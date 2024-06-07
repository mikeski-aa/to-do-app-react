import { useContext } from "react";
import { TaskContext } from "../App";
import { DisplayTasks } from "./DisplayTasks";
import { getCompleteTaskList, getIncompleteTaskList } from "./utils";

// date needs to be in YYYY-MM-DD to easily compare with current date stored in tasks
function getTodayDate() {
  let todayDate = new Date();
  todayDate = todayDate.toISOString().split("T")[0];

  return todayDate;
}

// this function is supposed to go through all of the current tasks, and return only tasks that are due in today
function todayTasks(taskContext) {
  let tempHolder = [...taskContext.currentTasks];
  let todayTasks = tempHolder.filter(
    (item) => item.taskDate === getTodayDate()
  );

  return todayTasks;
}

// this will display the screen showing all tasks that are currently due today

function Today() {
  const taskContext = useContext(TaskContext);

  if (taskContext.mainWindow != "3") {
    return null;
  }
  let tempListArray = todayTasks(taskContext);

  return (
    <div className="todayContainer">
      <h2> Today's tasks </h2>
      <div className="todayTasksIncomplete">
        {getIncompleteTaskList(tempListArray).map((task) => (
          <DisplayTasks
            taskName={task.taskName}
            taskDesc={task.taskDesc}
            taskDate={task.taskDate}
            taskPrio={task.taskPrio}
            taskId={task.taskId}
            taskCompleted={task.taskCompleted}
            taskDetailShow={task.taskDetailShow}
            key={task.taskId}
          />
        ))}
      </div>
      <hr></hr>
      <div className="todayTasksComplete">
        {getCompleteTaskList(tempListArray).map((task) => (
          <DisplayTasks
            taskName={task.taskName}
            taskDesc={task.taskDesc}
            taskDate={task.taskDate}
            taskPrio={task.taskPrio}
            taskId={task.taskId}
            taskCompleted={task.taskCompleted}
            taskDetailShow={task.taskDetailShow}
            key={task.taskId}
          />
        ))}
      </div>
    </div>
  );
}

export { Today, todayTasks };
