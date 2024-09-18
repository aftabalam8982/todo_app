import { createContext } from "react";
import Todo from "./components/Todo";
import useLocalStorage from "./components/hooks/useLocalStorage";

export const TodoContext = createContext();

function App() {
  const [storeValue, setStoreValue] = useLocalStorage("todo", []);

  return (
    <TodoContext.Provider value={{ storeValue, setStoreValue }}>
      <Todo />
    </TodoContext.Provider>
  );
}

export default App;
