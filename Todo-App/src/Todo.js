import React from "react";

const Todo = ({ id, todo, remove }) => {
  const handleDelete = (e) => {
    remove(e.target.parentElement);
  };

  return (
    <div
      id={id}
      className="Todo"
      // style={{ backgroundColor: color, width: width, height: height }}
    >
      - {todo}
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Todo;
