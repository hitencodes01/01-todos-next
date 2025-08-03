import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const errorResponse = Response.json(
    { error: "Please Login" },
    {
      status: 401,
    }
  );
  const userID = cookieStore.get("userID")?.value;
  if (!userID) {
    return errorResponse;
  }
  const user = await User.findById(userID);
  if (!user) {
    return errorResponse;
  }
  return user;
}
