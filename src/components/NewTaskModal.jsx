import { useContext, useState } from "react";
import { TaskContext } from "../App";

// this function will be responsible for creating a new task
// creating a new task means assigning a new task name, decription type of list, due date
// i was going to use context API initially to avoid prop drilling

// on change handlers for every input. Seperated into individual functions to follows Single Responsibility Principle
// tempTask, setTempTask <- names of original tempState state

function handleNewInputName(e, state) {
  state.setTempTask({ ...state.tempTask, taskName: e.target.value });
  console.log(state.tempTask);
}

function handleNewInputDesc(e, state) {
  state.setTempTask({ ...state.tempTask, taskDesc: e.target.value });
}

function handleNewInputDate(e, state) {
  let tempDate = e.target.value.split("-");
  let euDate = tempDate[2] + "-" + tempDate[1] + "-" + tempDate[0];
  state.setTempTask({ ...state.tempTask, taskDate: euDate });
}

function handleDropdownChange(e, state) {
  state.setTempTask({ ...state.tempTask, taskPrio: e.target.value });
  console.log(state.tempTask);
}

function CreateNewTask() {
  const tempState = useContext(TaskContext);

  return (
    <div className="createNewTask">
      <div className="taskName">
        <label>Task Title</label>
        <input
          type="text"
          className="nameInput"
          onChange={(e) => handleNewInputName(e, tempState)}
        />
      </div>

      <div className="taskDesc">
        <label>Task Description</label>
        <textarea
          className="detailsInput"
          onChange={(e) => handleNewInputDesc(e, tempState)}
        />
      </div>

      <div className="dueDate">
        <label>Due date</label>
        <input
          type="date"
          className="dateInput"
          onChange={(e) => handleNewInputDate(e, tempState)}
        />
      </div>

      <div className="taskPrio">
        <label>Task Prio</label>
        <select
          className="prioInput"
          // value={select}
          onChange={(e) => handleDropdownChange(e, tempState)}
        >
          <option value="0">-- Choose Priority --</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>

      <div className="newTaskButtons">
        <button className="saveNewTask">Save task</button>
        <button className="cancelNewTask">Cancel</button>
      </div>
    </div>
  );
}

export { CreateNewTask };
