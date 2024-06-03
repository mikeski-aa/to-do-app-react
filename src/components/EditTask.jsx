import { useContext } from "react";
import { TaskContext } from "../App";

// function to handle edits

function handleEditName(e, taskContext) {
  taskContext.setTempTask((prevTask) => ({
    ...prevTask,
    taskName: e.target.value,
  }));
}

function handleEditDesc(e, taskContext) {
  taskContext.setTempTask((prevTask) => ({
    ...prevTask,
    taskDesc: e.target.value,
  }));
}

function handleEditDate(e, taskContext) {
  taskContext.setTempTask((prevTask) => ({
    ...prevTask,
    taskDate: e.target.value,
  }));
}

function handleEditDropdown(e, taskContext) {
  taskContext.setTempTask((prevTask) => ({
    ...prevTask,
    taskPrio: e.target.value,
  }));
}

// function for handling cancel click + resetting temp
function handleCancelClick(taskContext) {
  taskContext.setEditTask(false);
  taskContext.setTempTask({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "",
  });
}

// function to handle saving back to the current state
function handleSaveClick(taskContext) {
  let tempHolder = [...taskContext.currentTasks];

  for (let x = 0; x < tempHolder.length; x++) {
    if (tempHolder[x].taskId === taskContext.tempTask.taskId) {
      tempHolder[x] = {
        ...tempHolder[x],
        taskName: taskContext.tempTask.taskName,
        taskDesc: taskContext.tempTask.taskDesc,
        taskDate: taskContext.tempTask.taskDate,
        taskPrio: taskContext.tempTask.taskPrio,
      };
    }
  }

  console.log(tempHolder);
  taskContext.setCurrentTasks(tempHolder);
  // for resetting temp state and closing the window
  taskContext.setEditTask(false);
  taskContext.setTempTask({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "",
  });
}

// this function will be responsible for opening a window where you can edit your task details.

function EditTask() {
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
          value={taskContext.tempTask.taskName}
          onChange={(e) => handleEditName(e, taskContext)}
        />
      </div>

      <div className="taskDesc">
        <label>Task Description</label>
        <textarea
          className="detailsInput"
          value={taskContext.tempTask.taskDesc}
          onChange={(e) => handleEditDesc(e, taskContext)}
        />
      </div>

      <div className="dueDate">
        <label>Due date</label>
        <input
          type="date"
          className="dateInput"
          value={taskContext.tempTask.taskDate}
          onChange={(e) => handleEditDate(e, taskContext)}
        />
      </div>

      <div className="taskPrio">
        <label>Task Prio</label>
        <select
          className="prioInput"
          onChange={(e) => handleEditDropdown(e, taskContext)}
          value={taskContext.tempTask.taskPrio}
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
        <button
          className="cancelNewTask"
          onClick={() => handleCancelClick(taskContext)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export { EditTask };
