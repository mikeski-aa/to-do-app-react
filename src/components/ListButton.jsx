import { useContext, useEffect } from "react";
import { TaskContext } from "../App";
import { resetAllDisplayStates } from "./utils";
// this function is responsible for the list buttons appearing on the navigation bar
// when a list item is clicked, all of the items associated with the given list will be rendered - filter method for this?

function ListButton(props) {
  const taskContext = useContext(TaskContext);

  const handleListClick = () => {
    taskContext.setEditTask(false);
    taskContext.setNewTask(false);
    // resetAllDisplayStates(taskContext);
    console.log("I'm opening a new list: ");
    console.log(props.listId);
    console.log(props.listName);

    // tells mainWindow to display lists
    taskContext.setMainWindow("5");

    taskContext.setActiveList({
      activeName: props.listName,
      activeId: props.listId,
    });
    // need to set temp task to point to the new location when opening a new list, otherwise adding lists will be broken
    taskContext.setTempTask({
      ...taskContext.tempTask,
      taskBelongTo: props.listId,
    });
  };

  // handling list delete -> this deletes all children tasks
  // warn user how many tasks they are deleting
  const handleDeleteClick = () => {
    let affectedTasks = taskContext.currentTasks.filter(
      (item) => item.taskBelongTo == props.listId
    );

    let purgedListArray = taskContext.currentList.filter(
      (item) => item.listId !== props.listId
    );

    preventLastListDeletion();

    if (affectedTasks.length == 0) {
      if (
        confirm(`Are you sure you would like to pernamently delete this list?`)
      ) {
        taskContext.setCurrentList(purgedListArray);
        taskContext.setActiveList({
          activeName: taskContext.currentList[findNearestIndex()].listName,
          activeId: taskContext.currentList[findNearestIndex()].listId,
        });
        // need to set temp task to point to the new location, otherwise editing/adding new tasks will break
        taskContext.setTempTask({
          ...taskContext.tempTask,
          taskBelongTo: taskContext.currentList[findNearestIndex()].listId,
        });
      }
    } else {
      if (
        confirm(
          `You currently have ${affectedTasks.length} tasks in this list. Are you sure you would like to delete them with the list?`
        )
      ) {
        let purgedTaskArray = taskContext.currentTasks.filter(
          (item) => item.taskBelongTo !== props.listId
        );
        taskContext.setCurrentTasks(purgedTaskArray);
        taskContext.setCurrentList(purgedListArray);
        taskContext.setActiveList({
          activeName: taskContext.currentList[findNearestIndex()].listName,
          activeId: taskContext.currentList[findNearestIndex()].listId,
        });

        // need to set temp task to point to the new location, otherwise editing/adding new tasks will break
        taskContext.setTempTask({
          ...taskContext.tempTask,
          taskBelongTo: taskContext.currentList[findNearestIndex()].listId,
        });
      }
    }
  };

  // helper function to prevent deletion of last list item
  const preventLastListDeletion = () => {
    let deleteIndex = taskContext.currentList.findIndex(
      (i) => i.listId === props.listId
    );

    if (deleteIndex === 0 && taskContext.currentList.length === 1) {
      throw new Error(
        alert(
          "You cannot delete the only list item remaining! Please create a new list if you would like to delete this one"
        )
      );
    }
  };

  // helper function for finding the nearest index and setting active window to that one
  const findNearestIndex = () => {
    let deleteIndex = taskContext.currentList.findIndex(
      (i) => i.listId === props.listId
    );

    if (deleteIndex === 0) {
      return 1;
    } else {
      return deleteIndex - 1;
    }
  };

  return (
    <div className="listButtonDiv">
      <button className="listButton" onClick={handleListClick}>
        {props.listName}
      </button>
      <button className="deleteListItem" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export { ListButton };
