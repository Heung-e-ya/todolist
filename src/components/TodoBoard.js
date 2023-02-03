import React from "react";
import TodoItem from "./TodoItem";

const todoBoard = (props) => {
  return (
    <div>
      <h1>todo list</h1>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
};

export default todoBoard;
