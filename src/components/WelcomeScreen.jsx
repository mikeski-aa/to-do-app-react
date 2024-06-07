import { useContext } from "react";
import { TaskContext } from "../App";

// this component will render on start of application.

function WelcomeScreen() {
  const taskContext = useContext(TaskContext);

  if (taskContext.mainWindow != "1") {
    return null;
  }

  return (
    <div className="welcomeScreen">
      <div>
        <h2>Let's get organised!</h2>
      </div>

      <div>
        You current have: <b>{taskContext.currentTasks.length}</b> active tasks
      </div>
      <br />
      <p>
        You can add a new task by opening up the "Placeholder List".
        Alternatively, you can create your own list!
      </p>
    </div>
  );
}

export { WelcomeScreen };
