declare module "@nuxt/schema" {
  interface RuntimeConfig {
    nuxtLocker: {
      password: string;
      jwtSecret: string;
    };
  }
  interface PublicRuntimeConfig {
    nuxtLocker: Omit<NuxtLockerOptions, "password" | "jwtSecret">;
  }
}

export interface NuxtLockerOptions {
  /**
   * Determines whether `nuxt-locker` is enabled. If set to `false`, the login page, API endpoint, and middleware will not be added to your application.
   * @default true
   */
  enabled: boolean;

  /**
   * **Required.**
   *
   * Default plain-text password. Fallback to `process.env.NUXT_LOCKER_PASSWORD` if unset.
   */
  password: string;

  /**
   * **Required.**
   *
   * JWT secret used for authentication. Fallback to `process.env.NUXT_LOCKER_JWT_SECRET` if unset.
   */
  jwtSecret: string;

  /**
   * Determines if every route is protected. If set to `true`, all routes require authentication. If `false`, only the specified `protectedPaths` are protected.
   * @default true
   */
  protectAllRoutes?: boolean;

  /**
   * Array of route patterns or strings to protect (e.g., `["/secret", "/protected"]`). Only used if `protectAllRoutes` is set to `false`.
   */
  protectedPaths?: string[];

  /**
   * The maximum age of the authentication cookie in seconds.
   * @default 2592000
   */
  age: number;

  /**
   * Name of the built-in CSS theme.
   * @default "dark"
   */
  theme?: "dark" | "light";

  /**
   * Email address that users can contact when they need access.
   * @default undefined
   */
  contactEmail?: string;

  /**
   * Custom configuration for routes and authentication to prevent conflicts with existing routes or endpoints in your application.
   */
  customConfig: {
    /**
     * Custom endpoint for password verification.
     * @default "/api/nuxt-locker-verify"
     */
    verifyEndpoint: string;

    /**
     * Custom route for the login page.
     * @default "/nuxt-locker"
     */
    loginRoute: string;

    /**
     * Custom cookie name for storing the authentication token.
     * @default "nuxt-locker"
     */
    cookieName: string;
  };
}
