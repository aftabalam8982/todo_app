import React, { useContext } from "react";
import { Container, Typography, Button } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContext } from "../App";

const Todo = () => {
  const { storedValue, setStoredValue } = useContext(TodoContext);

  console.log("Todo Render");

  const clearCompleted = () => {
    setStoredValue(storedValue.filter((todo) => !todo.completed));
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' align='center' gutterBottom>
        Todo List
      </Typography>
      <TodoForm />
      <TodoList />
      <Button
        variant='contained'
        color='secondary'
        onClick={clearCompleted}
        fullWidth
      >
        Clear Completed
      </Button>
    </Container>
  );
};

export default Todo;
