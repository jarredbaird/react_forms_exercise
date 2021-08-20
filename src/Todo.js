import React from "react";
import "./Todo.css";

const Todo = ({ task, id, removeTodo }) => {
  const remove = () => removeTodo(id);

  return (
    <>
      <div data-testid="todo">{task}</div>
      <button onClick={remove}>x</button>
    </>
  );
};

export default Todo;
