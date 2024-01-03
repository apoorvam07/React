import React, { useState } from "react";

export default function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    settodoName("");
    setdueDate("");
  };

  return (
    <div classNameName="container">
      <div classNameName="row Addtodorow">
        <div classNameName="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div classNameName="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-success Addbutton"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
