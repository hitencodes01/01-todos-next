import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <ul className="space-y-4">
      {/* Sample data for UI display only */}
      <TodoItem id={1} text="Sample Task 1" completed={false} />
      <TodoItem id={2} text="Completed Task" completed={true} />
      <TodoItem id={3} text="Editable Task" completed={false} />
    </ul>
  );
}
