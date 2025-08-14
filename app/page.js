import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-sky-950 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-3">
            Todo App
          </h1>
          <TodoList />
        </div>
      </main>
    </>
  );
}
