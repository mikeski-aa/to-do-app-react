import { useState } from "react";

// this function will render the main part of the application, which lets you add a new To-Do item to the list

function ToDoItems() {
  return (
    <>
      <button>New Task</button>
      <p>List todos here</p>
    </>
  );
}

export { ToDoItems };
