import { useContext } from "react";
import { TaskContext } from "../App";
import { DisplayTasks } from "./DisplayTasks";

// function to find out what tasks are overdue
// need to use similar function to the one in the upcoming component
// date format is YYYY-MM-DD
// This function needs to determine whether the date is before or. If it is before, need to assign a minus sign
function dateDifference(inputDate) {
  const date1 = new Date(`${inputDate}T00:00:00.0`);
  const date2 = new Date();
  const isBefore = date1.getTime() < date2.getTime();
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = Math.floor(Math.abs(diffTime / (1000 * 3600 * 24)));

  let result = isBefore ? -diffDays : diffDays;

  console.log("diff result is");
  console.log(result);
  return result;
}

// this function will return an array including all overdue tasks
function getOverdueTasks(taskContext) {
  let tempArray = [...taskContext.currentTasks];

  let purgedArray = tempArray.filter(
    (item) => dateDifference(item.taskDate) < 0
  );

  return purgedArray;
}
// function to show all overdue tasks

function Overdue() {
  const taskContext = useContext(TaskContext);

  if (taskContext.mainWindow !== "4") {
    return null;
  }

  console.log(getOverdueTasks(taskContext));

  return (
    <div className="overdueContainer">
      <h2>Overdue tasks</h2>
      <div className="displayOverdueTasks">
        {getOverdueTasks(taskContext).map((task) => (
          <DisplayTasks
            taskName={task.taskName}
            taskDesc={task.taskDesc}
            taskDate={task.taskDate}
            taskPrio={task.taskPrio}
            taskId={task.taskId}
            taskCompleted={task.taskCompleted}
            key={task.taskId}
          />
        ))}
      </div>
    </div>
  );
}

export { Overdue };
