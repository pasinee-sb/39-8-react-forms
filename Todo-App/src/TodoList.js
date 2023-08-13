import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import "./Todo.css";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITIAL_STATE = [
    { id: uuid(), todo: "Plant the water" },
    { id: uuid(), todo: "Dog the walk" },
  ];

  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  const remove = (removeItem) => {
    const updatedBoxes = todos.filter((todo) => todo.id !== removeItem.id);
    setTodos(updatedBoxes);
  };
  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, todo }) => (
          <Todo key={id} id={id} todo={todo} remove={remove} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
