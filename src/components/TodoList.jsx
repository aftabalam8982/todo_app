import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, editTodo }) => {
  console.log("TodoList Render");
  return (
    <List style={{ backgroundColor: "#c5e1a5", marginBottom: "1rem" }}>
      {todos.map((todo, index) => (
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
