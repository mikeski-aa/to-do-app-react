// this displays a new task card
//   taskId: "",taskName: "",taskDesc: "", taskDate: "", taskPrio: "",

function DisplayTasks(props) {
  return (
    <div className="task">
      <div className="taskInfo">
        <div className="displayTaskName">{props.taskName}</div>
        <div className="displayTaskDesc">{props.taskDesc}</div>
        <div className="displayTaskDue">{props.taskDate}</div>
        <div className="displayTaskPrio">{props.taskPrio}</div>
      </div>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export { DisplayTasks };
