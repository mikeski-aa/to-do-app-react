import { useContext } from "react";
import { TaskContext } from "../App";

// function to handle edits

function handleEditName() {}

function handleEditDesc() {}

function handleEditDate() {}

function handleEditDropdown() {}

// this function will be responsible for opening a window where you can edit your task details.

function EditTask(props) {
  const taskContext = useContext(TaskContext);

  if (taskContext.editTask === false) {
    return null;
  }

  return (
    <div className="editTask">
      <div className="taskName">
        <label>Task Title</label>
        <input
          type="text"
          className="nameInput"
          value={props.taskName}
          onChange={(e) => handleEditName(e, taskContext)}
        />
      </div>

      <div className="taskDesc">
        <label>Task Description</label>
        <textarea
          className="detailsInput"
          value={props.taskDesc}
          onChange={(e) => handleEditDesc(e, taskContext)}
        />
      </div>

      <div className="dueDate">
        <label>Due date</label>
        <input
          type="date"
          className="dateInput"
          value={props.taskDate}
          onChange={(e) => handleEditDate(e, taskContext)}
        />
      </div>

      <div className="taskPrio">
        <label>Task Prio</label>
        <select
          className="prioInput"
          onChange={(e) => handleEditDropdown(e, taskContext)}
          value={props.taskPrio}
        >
          <option value="0">-- Choose Priority --</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>

      <div className="newTaskButtons">
        <button
          className="saveNewTask"
          onClick={() => handleSaveClick(taskContext)}
        >
          Save task
        </button>
        <button className="cancelNewTask">Cancel</button>
      </div>
    </div>
  );
}

export { EditTask };
