import { useContext } from "react";
import { TaskContext } from "../App";

// this function is responsible for the list buttons appearing on the navigation bar
// when a list item is clicked, all of the items associated with the given list will be rendered - filter method for this?

function ListButton(props) {
  const taskContext = useContext(TaskContext);

  const handleListClick = (e) => {
    console.log(props.listId);
    taskContext.setActiveList({
      activeName: props.listName,
      activeId: props.listId,
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

    if (affectedTasks.length == 0) {
      if (
        confirm(`Are you sure you would like to pernamently delete this list?`)
      ) {
        taskContext.setCurrentList(purgedListArray);
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
      }
    }
  };

  return (
    <div className="listButtonDiv">
      <button className="listButton" onClick={handleListClick}>
        {props.listName}
      </button>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export { ListButton };
