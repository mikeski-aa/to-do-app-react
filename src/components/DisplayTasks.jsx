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
function handleEditEvent() {}

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
            handleEditEvent(taskContext.editTask, taskContext.setEditTask)
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
