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
    <div className="container">
      <div className="row Addtodorow">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success Addbutton"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
