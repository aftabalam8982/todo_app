import React, { memo, useContext } from "react";
import { List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const TodoList = ({ toggleComplete, editTodo }) => {
  const { storeValue } = useContext(TodoContext);
  return (
    <List style={{ backgroundColor: "#c5e1a5", marginBottom: "1rem" }}>
      {storeValue.length !== 0 ? (
        storeValue.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleComplete={() => toggleComplete(index)}
            editTodo={(newTitle) => editTodo(index, newTitle)}
          />
        ))
      ) : (
        <Typography align='center' variant='h6'>
          List is Empty
        </Typography>
      )}
    </List>
  );
};

export default memo(TodoList);
