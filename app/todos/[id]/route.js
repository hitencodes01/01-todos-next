import todos from "../../../todos";
export async function GET(_, { params }) {
  const { id } = await params;
  const todo = todos.find((todo) => id === String(todo.id));
  if (!todo) {
    return Response.json(
      { error: "ToDo not found" },
      {
        status: 404,
      }
    );
  }
  return Response.json(todo);
}
