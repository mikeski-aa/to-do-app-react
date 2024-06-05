import { useContext } from "react";
import { TaskContext } from "../App";
import { DisplayTasks } from "./DisplayTasks";

// function to find out what tasks are overdue
// need to use similar function to the one in the upcoming component
// date format is YYYY-MM-DD
// I should probably move this function into a utils component
function dateDifference(inputDate) {
  const date1 = new Date(`${inputDate}T00:00:00.0`);
  const date2 = new Date();
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = Math.floor(Math.abs(diffTime / (1000 * 3600 * 24)));

  return diffDays;
}

// function to show all overdue tasks

function Overdue() {
  const taskContext = useContext(TaskContext);

  if (taskContext.mainWindow !== "4") {
    return null;
  }

  console.log(dateDifference("2024-01-04"));

  return (
    <div className="overdueContainer">
      <h2>Overdue tasks</h2>
    </div>
  );
}

export { Overdue };
