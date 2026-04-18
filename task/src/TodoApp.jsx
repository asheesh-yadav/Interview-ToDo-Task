import React, { useState } from "react";
import { useTodos } from "./Context/ToDoContext";

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, filter, setFilter } = useTodos();

  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div className="container">
      <h2>Todo App</h2>

      {/* Add Task */}
      <div className="inputBox">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      {/* Todo List */}
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>

            <span>
              {todo.text}
            </span>

            {/* Toggle Done / Undo */}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Undo" : "Done"}
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;