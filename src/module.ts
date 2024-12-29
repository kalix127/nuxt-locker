import type { NuxtLockerOptions } from "./types";
import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule<NuxtLockerOptions>({
  meta: {
    name: "nuxtLocker",
    configKey: "nuxtLocker",
  },
  defaults: {
    enabled: true,
    password: "",
    jwtSecret: "",
    protectAllRoutes: true,
    protectedPaths: [],
    age: 2592000, // 30 days
    theme: "dark",
    customConfig: {
      verifyEndpoint: "/api/nuxt-locker-verify",
      loginRoute: "/nuxt-locker",
      cookieName: "nuxt-locker",
    },
  },
  setup(options, nuxt) {
    if (!options.enabled) {
      console.warn(
        "[nuxt-locker] Locker is disabled.",
      );
      return;
    }

    // Ensure password is set
    if (!options.password && !process.env.NUXT_LOCKER_PASSWORD) {
      console.error(
        "[nuxt-locker] No password set - please set NUXT_LOCKER_PASSWORD env variable or 'password' option",
      );
      return;
    }

    // Ensure JWT secret is set
    if (!options.jwtSecret && !process.env.NUXT_LOCKER_JWT_SECRET) {
      console.error(
        "[nuxt-locker] No JWT secret set - please set NUXT_LOCKER_JWT_SECRET env variable or 'jwtSecret' option",
      );
      return;
    }

    // Set runtime config
    nuxt.options.runtimeConfig.nuxtLocker = {
      password: options.password || process.env.NUXT_LOCKER_PASSWORD || "",
      jwtSecret: options.jwtSecret || process.env.NUXT_LOCKER_JWT_SECRET || "",
    };
    nuxt.options.runtimeConfig.public.nuxtLocker = {
      enabled: options.enabled,
      protectAllRoutes: options.protectAllRoutes,
      protectedPaths: options.protectedPaths,
      age: options.age,
      theme: options.theme,
      contactEmail: options.contactEmail,
      customConfig: options.customConfig,
    } as Omit<NuxtLockerOptions, "password" | "jwtSecret">;
  },
});
