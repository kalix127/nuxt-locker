import { useRuntimeConfig } from "#imports";
import { defineEventHandler, readBody, setCookie } from "h3";
import jwt from "jsonwebtoken";
import { createSession } from "../sessions";

export default defineEventHandler(async (event) => {
  const { password, jwtSecret } = useRuntimeConfig().nuxtLocker;
  const { age, customConfig } = useRuntimeConfig().public.nuxtLocker;

  const { password: bodyPassword } = await readBody(event);

  if (!bodyPassword) {
    return {
      ok: false,
      message: "Password is required",
      statusCode: 400,
    };
  }

  if (bodyPassword !== password) {
    return {
      ok: false,
      message: "Invalid password",
      statusCode: 401,
    };
  }

  const token = jwt.sign(
    { iat: Math.floor(Date.now() / 1000) },
    jwtSecret,
    { expiresIn: `${age}s` },
  );

  await createSession(token, age);

  setCookie(event, customConfig.cookieName, token, {
    maxAge: age,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return {
    ok: true,
    statusCode: 200,
  };
});
