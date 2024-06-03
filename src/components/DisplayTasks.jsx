import { useContext } from "react";
import { TaskContext } from "../App";

// function for handling deletion of an individual card
function handleDeleteEvent(taskId, currentState, setCurrState) {
  console.log(taskId);
  let tempState = [...currentState];
  let newStateArray = tempState.filter((x) => x.taskId !== taskId);
  setCurrState(newStateArray);
}

// function for handling editing of individual card
// this task needs to assign several states -> first state to display the edit card div
// second state to store the edit card ID
function handleEditEvent(setEditTask, taskId, currentTasks) {
  setEditTask(true);
  setTempTask(taskId, currentTasks);
}

// function to filter existing tasks, extracting the sought after task and setting it to temp state
function setTempTask(inputId, currentTasks) {
  let tempHolder = [...currentTasks];
  let tempItem = tempHolder.filter((item) => item.taskId === inputId);

  console.log(tempItem);

  return tempItem;
}

// this displays a new task card
//   taskId: "",taskName: "",taskDesc: "", taskDate: "", taskPrio: "",

function DisplayTasks(props) {
  const taskContext = useContext(TaskContext);
  return (
    <div className="task">
      <div className="taskInfo">
        <div className="displayTaskName">{props.taskName}</div>
        <div className="displayTaskDesc">{props.taskDesc}</div>
        <div className="displayTaskDue">{props.taskDate}</div>
        <div className="displayTaskPrio">{props.taskPrio}</div>
      </div>
      <div className="buttons">
        <button
          onClick={() =>
            handleEditEvent(
              taskContext.setEditTask,
              props.taskId,
              taskContext.currentTasks
            )
          }
        >
          Edit
        </button>
        <button
          onClick={() =>
            handleDeleteEvent(
              props.taskId,
              taskContext.currentTasks,
              taskContext.setCurrentTasks
            )
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export { DisplayTasks };
