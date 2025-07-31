import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function POST(request) {
  await connectDB();
  const cookieStore = await cookies();
  const { email, password } = await request.json();
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return Response.json(
      { error: "Invalid Credentials" },
      {
        status: 400,
      }
    );
  }
  cookieStore.set("userID", user.id, {
    httpOnly: true,
  });
  return Response.json(user, {
    status: 200,
  });
}
