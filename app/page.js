"use client";

import ThemeToggle from "@/components/ThemeToggle.js";
import TodoInput from "../components/TodoInput.js"
import TodoList from "../components/TodoList.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-5 md:p-10">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">📝 My Todo List</h1>
          <ThemeToggle />
        </div>
        <TodoInput />
        <TodoList />
      </div>
    </main>
  );
}
