import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = (props) => {
  const INITIAL_STATE = [];

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const removeBox = (boxId) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== boxId));
  };
  return (
    <>
      <NewBoxForm addBox={addBox} />
      <div className="BoxItem">
        <div>
          {boxes.map(({ id, color, height, width }) => {
            return (
              <Box
                key={id}
                id={id}
                color={color}
                height={height}
                width={width}
                removeBox={removeBox}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoxList;
