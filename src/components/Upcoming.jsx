import { useContext, useState } from "react";
import { TaskContext } from "../App";
import { DisplayTasks } from "./DisplayTasks";

//   date.setDate(date.getDate() + 30);

// helper function to get the future date
// function was lifted from stackOverflow
// date input must be in YYYY-MM-DD format, should work with existing date format in tasks
function futureDate(inputDate) {
  const date1 = new Date(`${inputDate}T00:00:00.0`);
  const date2 = new Date();
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = Math.floor(Math.abs(diffTime / (1000 * 3600 * 24)));

  return diffDays;
}

// this function will check for upcoming tasks depending on how many are set by the user.

function Upcoming() {
  const taskContext = useContext(TaskContext);
  const [upcomingValue, setUpcomingValue] = useState("3");

  if (taskContext.mainWindow != "2") {
    return null;
  }

  // setting how many days forward tasks should be displayed
  const setUpcomingThree = () => {
    setUpcomingValue("3");
  };

  const setUpcomingFive = () => {
    setUpcomingValue("5");
  };

  const setUpcomingSeven = () => {
    setUpcomingValue("7");
  };

  return (
    <div className="upcomingTaskContainer">
      <h2>Upcoming tasks</h2>
      <button onClick={setUpcomingThree}>Next 3 days</button>
      <button onClick={setUpcomingFive}>Next 5 days</button>
      <button onClick={setUpcomingSeven}>Next 7 days</button>
      <div className="upcomingTasks"></div>
    </div>
  );
}

export { Upcoming };
