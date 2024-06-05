import { useContext } from "react";
import { TaskContext } from "../App";

// function for handling deletion of an individual card
function handleDeleteEvent(taskId, taskContext) {
  let tempState = [...taskContext.currentTasks];
  let newStateArray = tempState.filter((x) => x.taskId !== taskId);
  taskContext.setCurrentTasks(newStateArray);
}

// function for handling editing of individual card
// this task needs to assign several states -> first state to display the edit card div
// second state to store the edit card ID
// if
function handleEditEvent(taskId, taskContext) {
  if (taskContext.addNewTask === true) {
    return alert(
      "Finish adding a new task or cancel it before editing an existing task"
    );
  }

  taskContext.setEditTask(true);
  console.log("watch if correct belong to assigned");
  console.log(getTempTask(taskId, taskContext.currentTasks));
  taskContext.setTempTask(getTempTask(taskId, taskContext.currentTasks));
}

// function to filter existing tasks, extracting the sought after task and setting it to temp state
function getTempTask(inputId, currentTasks) {
  let tempHolder = [...currentTasks];
  let tempItem = tempHolder.filter((item) => item.taskId === inputId);

  return tempItem[0];
}

// this displays a new task card
//   taskId: "",taskName: "",taskDesc: "", taskDate: "", taskPrio: "",

function DisplayTasks(props) {
  const taskContext = useContext(TaskContext);
  let doneStatus;

  // handler for clicking of the box
  // I am keeping this handler within the function for now, however, I am unsure if I should take it out or bring others in
  const handleCompleteClick = () => {
    let tempArray = [...taskContext.currentTasks];

    for (let x = 0; x < tempArray.length; x++) {
      if (tempArray[x].taskId === props.taskId) {
        tempArray[x] = {
          ...tempArray[x],
          taskCompleted: !tempArray[x].taskCompleted,
        };
      }
    }

    taskContext.setCurrentTasks(tempArray);
  };

  // change classname if done is ticked

  if (props.taskCompleted === true) {
    doneStatus = "markDone";
  } else {
    doneStatus = "";
  }

  return (
    <div className={`task ${doneStatus}`}>
      <div className={`taskInfo`}>
        <div className="displayTaskName">{props.taskName}</div>
        <input
          type="checkbox"
          className="displayTaskCompleted"
          defaultChecked={props.taskCompleted}
          onChange={handleCompleteClick}
        ></input>
        <div className="displayTaskDesc">{props.taskDesc}</div>
        <div className="displayTaskDue">{props.taskDate}</div>
        <div className="displayTaskPrio">{props.taskPrio}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleEditEvent(props.taskId, taskContext)}>
          Edit
        </button>
        <button onClick={() => handleDeleteEvent(props.taskId, taskContext)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export { DisplayTasks };
