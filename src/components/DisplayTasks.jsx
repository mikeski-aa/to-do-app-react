import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../App";
import "../styles/DisplayTasks.css";
import svg from "../assets/down-square-svgrepo-com.svg";
import {
  resetAllDisplayStates,
  formatPriorityDisplay,
  formatDate,
  checkIfTaskIsDifferent,
} from "./utils";

// function for handling editing of individual card
// this task needs to assign several states -> first state to display the edit card div
// second state to store the edit card ID

function handleEditEvent(taskId, taskContext) {
  if (taskContext.addNewTask === true) {
    return alert(
      "Finish adding a new task or cancel it before editing an existing task"
    );
  } else if (taskContext.editTask === false) {
    console.log("Opening THIS task ID: ");
    console.log(taskId);
    console.log(taskContext.tempTask.taskId);
    changeDetailStatus(taskId, taskContext);
    taskContext.setEditTask(true);
    taskContext.setTempTask(getTempTask(taskId, taskContext.currentTasks));
  } else {
    checkIfTaskIsDifferent(
      taskId,
      taskContext.tempTask.taskId,
      taskContext.editTask,
      taskContext
    );
  }
}

// function to change specific task detail status
function changeDetailStatus(taskId, taskContext) {
  let tempHolder = [...taskContext.currentTasks];
  for (let x = 0; x < tempHolder.length; x++) {
    if (tempHolder[x].taskId === taskId) {
      tempHolder[x] = {
        ...tempHolder[x],
        taskDetailShow: !tempHolder[x].taskDetailShow,
      };
    }
  }

  taskContext.setCurrentTasks(tempHolder);
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
  let detailShow;

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

  // check if details should be displayed

  if (props.taskDetailShow === true) {
    detailShow = "detailShow";
  } else {
    detailShow = "detailHide";
  }

  return (
    <div className={`task ${doneStatus}`}>
      <div className={`taskInfo`}>
        <div className="taskHeader">
          <div className="checkAndTitle">
            <input
              type="checkbox"
              className="displayTaskCompleted"
              defaultChecked={props.taskCompleted}
              onChange={handleCompleteClick}
            ></input>
            <div className="displayTaskName">
              <b>{props.taskName}</b>
            </div>
          </div>
          <div
            className="dropdownButton"
            onClick={() => handleEditEvent(props.taskId, taskContext)}
          >
            <img src={svg} className="dropdownButtonIcon"></img>
          </div>
        </div>
        <div className={`taskDetails ${detailShow}`}>
          <div className="displayTaskDesc">{props.taskDesc}</div>

          <div className="dueDateAndPrio">
            <div>
              <b>Due date:</b>
            </div>
            <div className="displayTaskDue">
              {formatDate(props.taskDate, taskContext.dateFormat)}
            </div>
            <div>
              <b>Priority:</b>
            </div>
            <div className="displayTaskPrio">
              {formatPriorityDisplay(props.taskPrio)}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export { DisplayTasks };
