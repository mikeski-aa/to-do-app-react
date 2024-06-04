import { useContext } from "react";
import { TaskContext } from "../App";

// this function is reponsible for creating a small popup to add a new list item

function AddNewList() {
  const taskContext = useContext(TaskContext);

  // saves new list name to temp state before it is added to list state in app
  const handleInputChange = (e) => {
    taskContext.setTempListName({
      ...taskContext.tempListName,
      listName: e.target.value,
    });
  };

  // saves to list state in app
  const handleSaveList = () => {
    let tempList = taskContext.tempListName;

    console.log(tempList);
    taskContext.setCurrentList([...taskContext.currentList, tempList]);
    taskContext.setShowNewList(false);
    console.log(taskContext.currentList);
  };

  // reset temp and close input
  const handleCancelList = () => {
    console.log(taskContext.tempListName);
    taskContext.setTempListName({ listName: "", listId: "" });
    taskContext.setShowNewList(false);
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
      <button className="cancelNewList" onClick={handleCancelList}>
        Cancel
      </button>
    </div>
  );
}

export { AddNewList };
