import { TodoProvider } from "./Context/ToDoContext";
import TodoApp from "./TodoApp";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;