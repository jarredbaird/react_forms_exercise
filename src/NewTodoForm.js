import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { task: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Task: </label>
        <input
          id="task"
          type="text"
          name="task"
          placeholder="Wash und-ies"
          data-testid="task"
          value={formData.task}
          onChange={handleChange}
        />
        <button>Add the best todo ever!</button>
      </form>
      <p>{formData.task}</p>
    </>
  );
};

export default NewTodoForm;
