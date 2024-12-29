import { useRuntimeConfig } from "#imports";
import { defineEventHandler, getCookie, getRequestURL, sendRedirect } from "h3";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { jwtSecret } = useRuntimeConfig().nuxtLocker;
  const { protectAllRoutes, protectedPaths } = useRuntimeConfig().public.nuxtLocker;
  const { cookieName, loginRoute, verifyEndpoint } = useRuntimeConfig().public.nuxtLocker.customConfig;

  const url = getRequestURL(event);
  const token = getCookie(event, cookieName);

  // If user is already authenticated and tries to access login page, redirect to home
  if (url.pathname === loginRoute && token) {
    try {
      jwt.verify(token, jwtSecret);
      return sendRedirect(event, "/", 302);
    }
    catch {}
  }

  const isProtected = protectAllRoutes
    ? true
    : protectedPaths?.some((path: string) => url.pathname === path);

  if (
    !isProtected
    || url.pathname === verifyEndpoint
    || url.pathname === loginRoute
  ) {
    return;
  }

  if (!token) {
    return sendRedirect(event, `${loginRoute}?redirect=${url.pathname}`, 302);
  }

  try {
    jwt.verify(token, jwtSecret);
  }
  catch {
    return sendRedirect(event, `${loginRoute}?redirect=${url.pathname}`, 302);
  }
});
