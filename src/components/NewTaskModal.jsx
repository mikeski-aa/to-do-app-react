import { useContext } from "react";
import { TaskContext } from "../App";

// this function will be responsible for creating a new task
// creating a new task means assigning a new task name, decription type of list, due date
// i was going to use context API initially to avoid prop drilling
// unique task ID needs to be generated when this modal is OPENED!

// on change handlers for every input. Seperated into individual functions to follows Single Responsibility Principle
// TaskContext.Provider value={{ tempTask, setTempTask, currentTasks, setCurrentTasks addNewTask, setNewTask,}}
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

// submit will add the new task to the currentTasks state, it will also reset temp state.
// additionally, the newTask open state is set to close, to hide the form

function handleSaveClick(state) {
  let tempTask = state.tempTask;
  console.log(state.currentTasks);
  state.setCurrentTasks([...state.currentTasks, tempTask]);
  state.setTempTask({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "",
  });
  console.log(state.currentTasks);
  state.setNewTask(false);
}

// function takes care of creating a new task
// cancel will clear the tempState and close the modal
function CreateNewTask() {
  const taskContext = useContext(TaskContext);

  if (taskContext.addNewTask === false) {
    return null;
  }

  return (
    <div className="createNewTask">
      <div className="taskName">
        <label>Task Title</label>
        <input
          type="text"
          className="nameInput"
          onChange={(e) => handleNewInputName(e, taskContext)}
        />
      </div>

      <div className="taskDesc">
        <label>Task Description</label>
        <textarea
          className="detailsInput"
          onChange={(e) => handleNewInputDesc(e, taskContext)}
        />
      </div>

      <div className="dueDate">
        <label>Due date</label>
        <input
          type="date"
          className="dateInput"
          onChange={(e) => handleNewInputDate(e, taskContext)}
        />
      </div>

      <div className="taskPrio">
        <label>Task Prio</label>
        <select
          className="prioInput"
          onChange={(e) => handleDropdownChange(e, taskContext)}
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

export { CreateNewTask };
