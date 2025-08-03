import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";
import { cookies } from "next/headers";
import User from "@/models/userModel";


export async function GET() {
  await connectDB();
  const cookieStore = await cookies();
  const userID =  cookieStore.get("userID")?.value;
  const user = await User.findById(userID);
  if (!user) {
    window.alert("please login")
    return Response.json(
      { error: "Please Login" },
      {
        status: 401,
      }
    );
  }
  const allTodo = await Todo.find({ userID });
  return Response.json(
    allTodo.map(({ id, text, completed }) => ({ id, text, completed }))
  );
}


export async function POST(request) {
  const cookieStore = await cookies();
  const userID =  cookieStore.get("userID")?.value;
  const user = await User.findById(userID);
  if (!user) {
    window.alert("please login")
    return Response.json(
      { error: "Please Login" },
      {
        status: 401,
      }
    );
  }
  const todo = await request.json();
  const { id, text, completed , userId } = await Todo.create({
    text: todo.text,
    userID
  });

  return Response.json(
    { id, text, completed , userId },
    {
      status: 201,
    }
  );
}
