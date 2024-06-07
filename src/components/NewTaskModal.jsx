import { useContext, useState } from "react";
import { TaskContext } from "../App";
import "../styles/AddTask.css";

// this function will be responsible for creating a new task
// creating a new task means assigning a new task name, decription type of list, due date
// i was going to use context API initially to avoid prop drilling
// unique task ID needs to be generated when this modal is OPENED!

// on change handlers for every input. Seperated into individual functions to follows Single Responsibility Principle
// TaskContext.Provider value={{ tempTask, setTempTask, currentTasks, setCurrentTasks addNewTask, setNewTask,}}
function handleNewInputName(e, state) {
  state.setTempTask({ ...state.tempTask, taskName: e.target.value });
}

function handleNewInputDesc(e, state) {
  state.setTempTask({ ...state.tempTask, taskDesc: e.target.value });
}

// date conversion here is pointless, as you will have to convert it back when editing.
// what I need to do instead is carry out the date conversion when date is display, with the option to toggle EU or US date format via a toggle w/ a state
function handleNewInputDate(e, state) {
  state.setTempTask({ ...state.tempTask, taskDate: e.target.value });
}

function handleDropdownPrioChange(e, state) {
  state.setTempTask({ ...state.tempTask, taskPrio: e.target.value });
}

function handleDropdownListChange(e, state, setSelectList) {
  setSelectList(true);
  let tempId = state.currentList.filter(
    (item) => item.listName === e.target.value
  )[0].listId;
  state.setTempTask({ ...state.tempTask, taskBelongTo: tempId });
}

// submit will add the new task to the currentTasks state, it will also reset temp state.
// additionally, the newTask open state is set to close, to hide the form

function handleSaveClick(state, listClicked, setListClicked) {
  if (listClicked === false) {
    return alert("You must select a list item!");
  }

  let tempTask = state.tempTask;

  state.setCurrentTasks([...state.currentTasks, tempTask]);
  state.setTempTask({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "1",
    taskCompleted: false,
    taskBelongTo: state.activeList.activeId,
    taskDetailShow: false,
  });
  console.log(state.currentTasks);
  state.setNewTask(false);
  setListClicked(false);
}

// function for handling cancel click + resetting the temp holder
function handleCancelClick(state, setListState) {
  state.setTempTask({
    taskId: "",
    taskName: "",
    taskDesc: "",
    taskDate: "",
    taskPrio: "1",
    taskBelongTo: "",
    taskDetailShow: false,
  });
  state.setNewTask(false);
  setListState(false);
}

// function takes care of creating a new task
// cancel will clear the tempState and close the modal
function CreateNewTask() {
  const [selectList, setSelectList] = useState(false);
  const taskContext = useContext(TaskContext);
  let newTab;

  if (taskContext.addNewTask === false) {
    newTab = "hideNew";
  } else {
    newTab = "showNew";
  }

  return (
    <div className={`createNewTask ${newTab}`}>
      <h2>Add new task</h2>
      <div className="largerNewTaskContainer">
        <div className="addNewTaskContainer">
          <div className="newNameAndDescCont">
            <div className="taskName">
              <label>
                <b>Task Title</b>
              </label>
              <input
                type="text"
                className="newNameInput"
                onChange={(e) => handleNewInputName(e, taskContext)}
              />
            </div>

            <div className="taskDesc">
              <label>
                <b>Task Description</b>
              </label>
              <textarea
                className="newDetailsInput"
                onChange={(e) => handleNewInputDesc(e, taskContext)}
              />
            </div>
          </div>
          <div className="newDateAndPrioCont">
            <div className="dueDate">
              <label>
                <b>Due date</b>
              </label>
              <input
                type="date"
                className="newDateInput"
                onChange={(e) => handleNewInputDate(e, taskContext)}
              />
            </div>

            <div className="taskPrio">
              <label>
                <b>Task Priority</b>
              </label>
              <select
                className="newPrioInput"
                onChange={(e) => handleDropdownPrioChange(e, taskContext)}
                defaultValue="1"
              >
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>

          <div className="taskList">
            <label>
              <b>Assign task to a list</b>
            </label>
            <select
              className="newListInput"
              onChange={(e) =>
                handleDropdownListChange(e, taskContext, setSelectList)
              }
              defaultValue="0"
            >
              <option vake="0">--Please select a list--</option>
              {taskContext.currentList.map((item) => (
                <option value={item.listName} key={item.listId}>
                  {item.listName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="newTaskButtons">
          <button
            className="cancelNewTask"
            onClick={() => handleCancelClick(taskContext, setSelectList)}
          >
            Cancel
          </button>
          <button
            className="saveNewTask"
            onClick={() =>
              handleSaveClick(taskContext, selectList, setSelectList)
            }
          >
            Save task
          </button>
        </div>
      </div>
    </div>
  );
}

export { CreateNewTask };
