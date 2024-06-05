import { useContext } from "react";
import { TaskContext } from "../App";

// date needs to be in YYYY-MM-DD to easily compare with current date stored in tasks
function getTodayDate() {
  let todayDate = new Date();
  todayDate = todayDate.toISOString().split("T")[0];

  return todayDate;
}

// this will display the screen showing all tasks that are currently due today

function Today() {
  const taskContext = useContext(TaskContext);

  if (taskContext.mainWindow != "3") {
    return null;
  }

  console.log(todayDate);

  return (
    <div className="todayContainer">
      <h3> Today's tasks </h3>
      <p></p>
    </div>
  );
}

export { Today };
