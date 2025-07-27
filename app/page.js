import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          Todo App
        </h1>
        <TodoList/>
      </div>
    </main>
  );
}
