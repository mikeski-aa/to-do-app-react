import { useState } from "react";

// this function will be responsible for creating a new task
// creating a new task means assigning a new task name, decription type of list, due date

function handleNewInput() {}

function handleDropdownChange(e, setDropdown) {
  console.log(e.target.value);
  setDropdown(e.target.value);
}

function CreateNewTask(props) {
  const [select, setSelect] = useState("");

  return (
    <div className="createNewTask">
      <div className="taskName">
        <label>Task Title</label>
        <input
          type="text"
          className="nameInput"
          onChange={(e) => console.log(e.target.className)}
        />
      </div>

      <div className="taskDesc">
        <label>Task Description</label>
        <textarea className="detailsInput" />
      </div>

      <div className="dueDate">
        <label>Due date</label>
        <input type="date" className="dateInput" />
      </div>

      <div className="taskPrio">
        <label>Task Prio</label>
        <select
          className="prioInput"
          value={select}
          onChange={(e) => handleDropdownChange(e, setSelect)}
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
