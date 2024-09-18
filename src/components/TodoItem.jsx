import React, { memo, useState } from "react";
import { ListItem, Checkbox, TextField, Typography, Box } from "@mui/material";

const TodoItem = ({ todo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const handleDoubleClick = () => {
    setIsEditing(true);
    setNewTitle(todo.title);
  };

  const handleBlur = () => {
    setIsEditing(false);
    editTodo(newTitle);
  };

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={toggleComplete} />
      {isEditing ? (
        <TextField
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === "Enter" && handleBlur()}
          fullWidth
          slotProps={{
            input: {
              style: { fontSize: 20 },
            },
          }}
        />
      ) : (
        <Box onDoubleClick={handleDoubleClick} flexGrow={1}>
          <Typography
            variant='body1'
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              fontSize: "1.3rem",
            }}
          >
            {todo.title}
          </Typography>
        </Box>
      )}
    </ListItem>
  );
};

export default memo(TodoItem);
