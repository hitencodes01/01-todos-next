"use client";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/todos");
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (text) => {
    const response = await fetch("/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await fetch(`/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: !todo.completed }),
    });
    if (response.status === 200) {
      fetchTodos();
    }
  };

  const deleteTodo = async (id) => {
    const response = await fetch(`/todos/${id}`, {
      method: "DELETE",
    });
    if (response.status == 204) fetchTodos();
  };

  const editTodo = async(id, newText) => {
     const response = await fetch(`/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ text : newText }),
    });
    if (response.status === 200) {
      fetchTodos();
    }
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <ul className="mt-4 space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </>
  );
}
