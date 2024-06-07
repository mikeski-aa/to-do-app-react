import { useContext, useState } from "react";
import { TaskContext } from "../App";
import "../styles/Settings.css";
// simple modal for changing date displayed from EU to US format

function Settings() {
  const taskContext = useContext(TaskContext);
  const [tempDate, setTempDate] = useState("");
  if (taskContext.showSettings === false) {
    return null;
  }

  const handleCancelSettings = () => {
    taskContext.setShowSettings(false);
  };

  const handleSaveSettings = () => {
    taskContext.setShowSettings(false);
    taskContext.setDateFormat(tempDate);
  };

  const handleSettingDropdownChange = (e) => {
    setTempDate(e.target.value);
  };
  return (
    <div className="settingsModal">
      <div className="settingsBox">
        <h2 className="settingsHeading">
          <b>Settings</b>
          <hr></hr>
        </h2>

        <div>Select date format you'd like to see in your tasks</div>
        <select
          onChange={handleSettingDropdownChange}
          defaultValue={taskContext.dateFormat}
        >
          <option value="EU">EU date format</option>
          <option value="US">US date format</option>
        </select>
        <div className="settingsBoxButtonContainer">
          <button
            className="cancelSettingsButton"
            onClick={handleCancelSettings}
          >
            Cancel
          </button>
          <button className="saveSettingsButton" onClick={handleSaveSettings}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export { Settings };
