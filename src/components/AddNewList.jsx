import { useContext } from "react";
import { TaskContext } from "../App";

// this function is reponsible for creating a small popup to add a new list item

function AddNewList() {
  const taskContext = useContext(TaskContext);

  // saves new list name to temp state before it is added to list state in app
  const handleInputChange = (e) => {
    taskContext.setTempListName(e.target.value);
  };

  // saves to list state in app
  const handleSaveList = () => {
    taskContext.setCurrentList([...setCurrentList, taskContext.tempListName]);
  };

  if (taskContext.showAddNewList === false) {
    return null;
  }

  return (
    <div className="addNewList">
      <label>Enter new list name</label>
      <input
        type="text"
        className="newListNameInput"
        placeholder="My new list"
        onChange={handleInputChange}
      ></input>
      <button className="saveNewList" onClick={handleSaveList}>
        Save list
      </button>
      <button className="cancelNewList">Cancel</button>
    </div>
  );
}

return { AddNewList };
