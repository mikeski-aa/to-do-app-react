// some helper functions for various components

// function for rendering complete task list

function getCompleteTaskList(inputArray) {
  let tempArray = [...inputArray];
  let purgedArray = tempArray.filter((item) => item.taskCompleted === true);

  return purgedArray;
}

function getIncompleteTaskList(inputArray) {
  let tempArray = [...inputArray];
  let purgedArray = tempArray.filter((item) => item.taskCompleted !== true);

  return purgedArray;
}

// function to go through the array and reset every display state to false
function resetAllDisplayStates(taskContext) {
  let tempArray = [...taskContext.currentTasks];
  for (let x = 0; x < tempArray.length; x++) {
    if (tempArray[x].taskDetailShow === true) {
      tempArray[x] = { ...tempArray[x], taskDetailShow: false };
    }
  }

  taskContext.setCurrentTasks(tempArray);
}

export { getCompleteTaskList, getIncompleteTaskList, resetAllDisplayStates };
