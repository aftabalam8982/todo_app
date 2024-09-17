import { Container } from "@mui/material";

const Todo = ({ children }) => {
  return <Container maxWidth='sm'>{children}</Container>;
};

export default Todo;
