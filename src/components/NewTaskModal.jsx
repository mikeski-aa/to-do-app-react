// this function will be responsible for creating a new task
// creating a new task means assigning a new task name, decription type of list, due date

function CreateNewTask() {
  return (
    <div className="createNewTask">
      <div className="taskName">
        <label>Task Title</label>
        <input type="text" />
      </div>

      <div className="taskDesc">
        <label>Task Description</label>
        <textarea />
      </div>

      <div className="dueDate">
        <label>Due date</label>
        <input type="date" />
      </div>

      <div className="taskPrio">
        <label>Task Prio</label>
        <select onChange={console.log("test")}>
          <option>-- Choose Priority --</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="newTaskButtons">
        <button>Save task</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export { CreateNewTask };
