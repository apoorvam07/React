import React from "react";

export default function AddTodo() {
  return (
    <div classNameName="container">
      <div classNameName="row Addtodorow">
        <div classNameName="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div classNameName="col-4">
          <input type="date" />
        </div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-success Addbutton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
