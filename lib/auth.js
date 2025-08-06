import User from "@/models/userModel";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function getLoggedInUser() {

  const cookieStore = await cookies();
  const errorResponse = Response.json(
    { error: "Please Login" },
    {
      status: 401,
    }
  );
  const cookie = cookieStore.get("userID")?.value;
  if (!cookie) {
    return errorResponse;
  }
  const userId = verifyCookie(cookie)
   if (!userId) {
    return errorResponse;
  }
  const user = await User.findById(userId);
  if (!user) {
    return errorResponse;
  }
  return user;
}

export function signCookie(cookie) {
  const signature = crypto
    .createHmac("sha256", process.env.SECRET_KEY)
    .update(cookie)
    .digest("hex");
  return `${cookie}.${signature}`;
}

export function verifyCookie(signedCookie) {
  const [cookie, cookieSignature] = signedCookie.split(".");
  const signature = signCookie(cookie).split(".")[1];
  console.log(cookieSignature)
  console.log(signature)
  if (signature === cookieSignature) {
    return cookie;
  }
  return false;
}
