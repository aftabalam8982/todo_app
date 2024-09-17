import React, { useContext } from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const TodoList = () => {
  const { storedValue, setStoredValue } = useContext(TodoContext);

  console.log("TodoList Render", storedValue);

  const toggleComplete = (index) => {
    const updatedTodos = storedValue.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setStoredValue(updatedTodos);
  };

  const editTodo = (index, newTitle) => {
    const updatedTodos = storedValue.map((todo, i) =>
      i === index ? { ...todo, title: newTitle } : todo
    );
    setStoredValue(updatedTodos);
  };

  return (
    <List style={{ backgroundColor: "#c5e1a5", marginBottom: "1rem" }}>
      {storedValue.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleComplete={() => toggleComplete(index)}
          editTodo={(newTitle) => editTodo(index, newTitle)}
        />
      ))}
    </List>
  );
};

export default React.memo(TodoList);
