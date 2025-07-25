export default function TodoInput() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your task..."
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add
      </button>
    </div>
  );
}