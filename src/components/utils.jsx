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

export { getCompleteTaskList, getIncompleteTaskList };
