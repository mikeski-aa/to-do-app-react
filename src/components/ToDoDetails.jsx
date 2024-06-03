import { useContext, useState } from "react";
import { TaskContext } from "../App";
import { v4 as uuidv4 } from "uuid";
import { DisplayTasks } from "./DisplayTasks";

function newTaskHandler(state) {
  if (state.addNewTask === false) {
    state.setTempTask({ ...state.tempTask, taskId: uuidv4() });
    state.setNewTask(true);
  }
}

// this function will render the main part of the application, which lets you add a new To-Do item to the list
// provided values: value={{ addNewTask, setNewTask, tempTask, setTempTask }}

function ToDoItems() {
  const taskContext = useContext(TaskContext);
  return (
    <div className="currentTasks">
      <button onClick={() => newTaskHandler(taskContext)}>New Task</button>
      <div className="displayTask">
        {taskContext.currentTasks.map((task) => (
          <DisplayTasks
            taskName={task.taskName}
            taskDesc={task.taskDesc}
            taskDate={task.taskDate}
            taskPrio={task.taskPrio}
            taskId={task.taskId}
            key={task.taskId}
          />
        ))}
      </div>
    </div>
  );
}

export { ToDoItems };
