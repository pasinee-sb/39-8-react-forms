import React from "react";

const Box = ({ id, color, width, height, remove }) => {
  const handleDelete = (e) => {
    remove(e.target.parentElement);
  };

  return (
    <div
      id={id}
      className="Box"
      style={{ backgroundColor: color, width: width, height: height }}
    >
      This is a box
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Box;
