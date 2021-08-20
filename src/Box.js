import React from "react";
import "./Box.css";

const Box = ({ id, color, width, height, removeBox }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
  };
  const remove = () => removeBox(id);

  return (
    <div style={style}>
      <div className="Box" style={style} data-testid="box"></div>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
