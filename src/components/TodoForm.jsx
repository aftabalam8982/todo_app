import React, { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { TodoContext } from "../App";

const TodoForm = () => {
  const { storedValue, setStoredValue } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  console.log("Todo Form Render", storedValue);

  const addTodo = () => {
    if (newTodo.trim()) {
      setStoredValue([...storedValue, { title: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  return (
    <Box display='flex' justifyContent='space-between' mb={3}>
      <TextField
        label='Add new todo'
        variant='outlined'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        fullWidth
        slotProps={{
          input: {
            style: { fontSize: 20 },
          },
        }}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={addTodo}
        style={{ marginLeft: "10px" }}
      >
        Add
      </Button>
    </Box>
  );
};

export default React.memo(TodoForm);
