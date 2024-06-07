import { useContext } from "react";
import { TaskContext } from "../App";
import "../styles/AboutApp.css";
import githubIcon from "../assets/github-mark-white.svg";

// modal displaying info about app
function AboutApp() {
  const taskContext = useContext(TaskContext);
  if (taskContext.aboutApp === false) {
    return null;
  }

  const handleAboutClose = () => {
    taskContext.setAboutApp(false);
  };

  const handleGithubClick = () => {
    window.open("https://github.com/mikeski-aa", "_blank");
  };

  return (
    <div className="aboutAppModal">
      <div className="aboutAppBox">
        <h2 className="aboutHeading">
          <b>About app</b>
        </h2>
        <div className="mainAboutContent">
          <div>
            <p>App written with React</p>
            <p>
              <b>Button design:</b> Temani Afif &nbsp;
              <a href="https://codepen.io/t_afif/pen/abKyJNJ" target="_blank">
                (link to button Codepen CSS)
              </a>
            </p>
            <div className="myLink">
              <b>My Github</b> &nbsp; &nbsp;
              <img
                src={githubIcon}
                className="githubIconAbout"
                onClick={handleGithubClick}
              ></img>
            </div>
          </div>
        </div>
        <button onClick={handleAboutClose}>Close</button>
      </div>
    </div>
  );
}

export { AboutApp };
