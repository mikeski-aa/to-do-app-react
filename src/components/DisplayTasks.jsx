import { useContext, useState } from "react";
import { TaskContext } from "../App";
import "../styles/DisplayTasks.css";

// function for handling deletion of an individual card
// deprecated, moving elsewhere

// function handleDeleteEvent(taskId, taskContext) {
//   let tempState = [...taskContext.currentTasks];
//   let newStateArray = tempState.filter((x) => x.taskId !== taskId);
//   taskContext.setCurrentTasks(newStateArray);
// }

// function for handling editing of individual card
// this task needs to assign several states -> first state to display the edit card div
// second state to store the edit card ID
// if
function handleEditEvent(taskId, taskContext, setDetailsShow) {
  if (taskContext.addNewTask === true) {
    return alert(
      "Finish adding a new task or cancel it before editing an existing task"
    );
  }

  setDetailsShow("detailShow");
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
  // individual state for each task, added to manipulate how elements should show
  const [detailsShow, setDetailsShow] = useState("detailHide");
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
        <div className="taskHeader">
          <input
            type="checkbox"
            className="displayTaskCompleted"
            defaultChecked={props.taskCompleted}
            onChange={handleCompleteClick}
          ></input>
          <div className="displayTaskName">{props.taskName}</div>
          <button
            onClick={() =>
              handleEditEvent(props.taskId, taskContext, setDetailsShow)
            }
          >
            Edit
          </button>
        </div>
        <div className={`taskDetails ${detailsShow}`}>
          <div className="displayTaskDesc">{props.taskDesc}</div>
          <div className="displayTaskDue">{props.taskDate}</div>
          <div className="displayTaskPrio">{props.taskPrio}</div>
        </div>
      </div>
      {/* <div className="buttons">
        <button onClick={() => handleDeleteEvent(props.taskId, taskContext)}>
          Delete
        </button> */}
      {/* </div> */}
    </div>
  );
}

export { DisplayTasks };
