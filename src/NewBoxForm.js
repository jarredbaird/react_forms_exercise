import React, { useState } from "react";
import "./Box.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { color: "", height: "", width: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color: </label>
        <input
          id="color"
          type="text"
          name="color"
          placeholder="Box Color"
          value={formData.color}
          onChange={handleChange}
        />
      </form>
      <p>{formData.color}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Width: </label>
        <input
          id="width"
          type="text"
          name="width"
          placeholder="Box Width"
          value={formData.width}
          onChange={handleChange}
        />
      </form>
      <p>{formData.width}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Height: </label>
        <input
          id="height"
          type="text"
          name="height"
          placeholder="Box Height"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Add the best box ever!</button>
      </form>
      <p>{formData.height}</p>
    </>
  );
};

export default NewBoxForm;
