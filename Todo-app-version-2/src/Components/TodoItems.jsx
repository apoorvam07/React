import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div>
      <div classNameName="items-container">
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.duedate} />
        ))}
      </div>
    </div>
  );
}
export default TodoItems;
