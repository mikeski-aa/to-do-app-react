import { useContext, useState } from "react";
import { TaskContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import { DisplayTasks } from "./DisplayTasks";

// responsible for opening a div for adding new state
// this cannot open if edit task is already opened!
function newTaskHandler(state) {
  if (state.editTask === true) {
    return alert("Finish editing your current task before adding a new one!");
  }

  if (state.addNewTask === false) {
    state.setTempTask({ ...state.tempTask, taskId: uuidv4() });
    state.setNewTask(true);
  }
}

// this function will render the main part of the application, which lets you add a new To-Do item to the list
// this should only display the items from currently selected list.
// need to filter results to display correct ones.

function ToDoItems() {
  const taskContext = useContext(TaskContext);

  let tempListArray = taskContext.currentTasks.filter(
    (task) => task.taskBelongTo !== taskContext.activeList.activeId
  );

  return (
    <div className="currentTasks">
      <h1>{taskContext.activeList.activeName}</h1>
      <button onClick={() => newTaskHandler(taskContext)}>New Task</button>
      <div className="displayTask">
        {tempListArray.map((task) => (
          <DisplayTasks
            taskName={task.taskName}
            taskDesc={task.taskDesc}
            taskDate={task.taskDate}
            taskPrio={task.taskPrio}
            taskId={task.taskId}
            taskCompleted={task.taskCompleted}
            key={task.taskId}
          />
        ))}
      </div>
    </div>
  );
}

export { ToDoItems };
