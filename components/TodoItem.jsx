"use client";
import { useState } from "react";

export default function TodoItem({ todo, toggleCompleted, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== "") {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between bg-gray-200 p-3 rounded-md text-black">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
            className="border px-2 py-1 rounded "
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-800" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="text-sm text-blue-600"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-sm text-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
