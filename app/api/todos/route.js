import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";
import { getLoggedInUser } from "@/lib/auth";

export async function GET() {
  await connectDB();
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;
  const allTodo = await Todo.find({ userID: user.id });
  return Response.json(
    allTodo.map(({ id, text, completed }) => ({ id, text, completed }))
  );
}

export async function POST(request) {
  connectDB();
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;
  const todo = await request.json();
  const { id, text, completed, userId } = await Todo.create({
    text: todo.text,
    userID: user.id,
  });
  return Response.json(
    { id, text, completed, userId },
    {
      status: 201,
    }
  );
}
