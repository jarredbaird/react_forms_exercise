import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  const INITIAL_STATE = [];
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  const removeTodo = (todoId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <h1>Todos</h1>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, task }) => (
          <Todo key={id} id={id} task={task} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
