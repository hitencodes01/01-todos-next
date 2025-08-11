"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
   const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
   const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const menuRef = useRef(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchUser = async () => {
    const response = await fetch("/api/user");
    const data = await response.json();
    if (response.status === 401) {
      return router.push("/login");
    }
    if (!data.error) {
      setUser(data);
    }
  };

  const handleLogout = async () => {
    const response = await fetch(`/api/logout`, {
      method: "POST",
    });
    if (response.status === 204) {
      return router.push("/login");
    }
  };
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task"
        className="flex-grow border p-2 rounded-md text-black"
      />
      <button
        onClick={handleAdd}
        className="bg-sky-950 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowUserMenu(!showUserMenu)}
          className="py-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
          aria-label="User menu"
        >
          User
        </button>
        {showUserMenu && (
          <div className="absolute right-0 mt-2 max-w-48 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-4 shadow-lg z-10 text-gray-900 dark:text-gray-100">
            <div className="text-sm font-semibold">{user.name}</div>
            <div
              className="text-xs text-gray-600 dark:text-gray-400 mb-3 truncate"
              title={user.email}
            >
              {user.email}
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left text-red-500 hover:underline text-sm cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
