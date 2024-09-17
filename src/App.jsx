import { createContext } from "react";
import Todo from "./components/Todo";
import useLocalStorage from "./components/hooks/useLocalStorage";

export const TodoContext = createContext();

function App() {
  const [storedValue, setStoredValue] = useLocalStorage("todo", []);
  return (
    <TodoContext.Provider value={{ storedValue, setStoredValue }}>
      <Todo />
    </TodoContext.Provider>
  );
}

export default App;
