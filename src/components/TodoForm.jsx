import React from "react";
import { TextField, Button, Box } from "@mui/material";

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  console.log("Todo Form Render");
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
