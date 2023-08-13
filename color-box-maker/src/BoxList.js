import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import "./Box.css";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = [];

  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const remove = (removeItem) => {
    const updatedBoxes = boxes.filter((box) => box.id !== removeItem.id);
    setBoxes(updatedBoxes);
  };
  return (
    <>
      <NewBoxForm addBox={addBox} />

      {boxes.map(({ id, color, width, height }) => (
        <Box
          key={id}
          id={id}
          color={color}
          width={width}
          height={height}
          remove={remove}
        />
      ))}
    </>
  );
};

export default BoxList;
