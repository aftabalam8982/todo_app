import { Button, Container, Typography } from "@mui/material";
import { useCallback, useContext, useState, useMemo, memo } from "react";
import { TodoContext } from "../App";
import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const { storeValue, setStoreValue } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      setStoreValue([...storeValue, { title: newTodo, completed: false }]);
      setNewTodo("");
    }
  }, [newTodo, storeValue, setStoreValue]);

  const toggleComplete = useCallback(
    (index) => {
      const updatedTodos = storeValue.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );
      setStoreValue(updatedTodos);
    },
    [storeValue, setStoreValue]
  );

  const editTodo = useCallback(
    (index, newTitle) => {
      const updatedTodos = storeValue.map((todo, i) =>
        i === index ? { ...todo, title: newTitle } : todo
      );
      setStoreValue(updatedTodos);
    },
    [storeValue, setStoreValue]
  );

  const clearCompleted = useCallback(() => {
    setStoreValue(storeValue.filter((todo) => !todo.completed));
  }, [storeValue, setStoreValue]);

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' align='center' gutterBottom>
        Todo List
      </Typography>

      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />

      <TodoList toggleComplete={toggleComplete} editTodo={editTodo} />

      <Button
        variant='contained'
        color='secondary'
        onClick={clearCompleted}
        fullWidth
        size='large'
      >
        Clear Completed
      </Button>
    </Container>
  );
};

export default memo(Todo);
