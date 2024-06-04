import { TaskContext } from "../App";

// this function is responsible for the list buttons appearing on the navigation bar
// when a list item is clicked, all of the items associated with the given list will be rendered - filter method for this?

function ListButton(props) {
  const handleListClick = (e) => {
    console.log(e.target);
  };

  const handleDeleteClick = () => {
    console.log("delete list");
  };

  return (
    <div className="listButtonDiv">
      <button className="listButton" onClick={handleListClick}>
        {props.listName}
      </button>
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export { ListButton };
