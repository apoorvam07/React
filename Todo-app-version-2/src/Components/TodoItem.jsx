import React from "react";

function TodoItem({ todoName, todoDate }) {
  return (
    <div classNameName="container">
      <div classNameName="row b-row">
        <div classNameName="col-6">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-danger deletebutton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
