import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import { signCookie } from "@/lib/auth";


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
  const signatureId = signCookie(user.id)
  cookieStore.set("userID", signatureId, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
  });
  return Response.json(user, {
    status: 200,
  });
}

