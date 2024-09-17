import { Button, Typography } from "@mui/material";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useCallback, useState } from "react";
import useLocalStorage from "./components/hooks/useLocalStorage";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [storedValue, setStoredValue] = useLocalStorage("todos", []);

  console.log("Todo Render", storedValue);

  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      setStoredValue([...storedValue, { title: newTodo, completed: false }]);
      setNewTodo("");
    }
  }, [newTodo, setStoredValue]);

  const toggleComplete = useCallback(
    (index) => {
      const updatedTodos = storedValue.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );
      setStoredValue(updatedTodos);
    },
    [storedValue, setStoredValue]
  );

  const editTodo = useCallback(
    (index, newTitle) => {
      const updatedTodos = storedValue.map((todo, i) =>
        i === index ? { ...todo, title: newTitle } : todo
      );
      setStoredValue(updatedTodos);
    },
    [setStoredValue, storedValue]
  );

  const clearCompleted = () => {
    setStoredValue(storedValue.filter((todo) => !todo.completed));
  };
  return (
    <>
      <Todo>
        <Typography variant='h3' align='center' gutterBottom>
          Todo List
        </Typography>
        <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <TodoList
          todos={storedValue}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
        <Button
          variant='contained'
          color='secondary'
          onClick={clearCompleted}
          fullWidth
        >
          Clear Completed
        </Button>
      </Todo>
    </>
  );
}

export default App;
