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
        <h2>Welcome to to do app</h2>
      </div>

      <div>
        You current have: {taskContext.currentTasks.length} active tasks
      </div>
    </div>
  );
}

export { WelcomeScreen };
