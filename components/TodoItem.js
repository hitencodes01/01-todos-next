export default function TodoItem({ id, text, completed }) {
  return (
    <li
      className={`flex items-center justify-between p-4 bg-white rounded shadow-sm ${
        completed ? "line-through text-gray-400" : ""
      }`}
    >
      <div className="flex items-center gap-3 w-full">
        <input type="checkbox" className="w-4 h-4" defaultChecked={completed} />

        <input
          type="text"
          defaultValue={text}
          className="flex-1 bg-transparent border-none focus:outline-none"
          readOnly
        />
      </div>

      <div className="flex gap-2 ml-4">
        <button className="text-blue-500 hover:underline">Edit</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </div>
    </li>
  );
}
