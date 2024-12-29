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
   * Whether nuxt-locker is enabled
   */
  enabled: boolean;

  /**
   * Default plain-text password. Fallback to process.env.NUXT_LOCKER_PASSWORD if unset.
   */
  password: string;

  /**
   * JWT secret. Fallback to process.env.NUXT_LOCKER_JWT_SECRET if unset.
   */
  jwtSecret: string;

  /**
   * If true, every route is protected. If false, only the specified paths are.
   * @default true
   */
  protectAllRoutes?: boolean;

  /**
   * Array of route patterns or strings to protect (e.g. ["/secret", "/user/"]).
   * If protectAllRoutes is true, this is ignored.
   */
  protectedPaths?: string[];

  /**
   * The max-age of the cookie (in seconds). E.g. 3600 = 1 hour.
   * If not set, defaults to 1 month (2592000 seconds).
   * @default 2592000
   */
  age: number;

  /**
   * Name of a built-in theme CSS (e.g. "default", "dark", etc.).
   * @default "dark"
   */
  theme?: string;

  /**
   * Email address that users can contact when they need access
   * @default undefined
   */
  contactEmail?: string;

  /**
   * Custom configuration for routes and authentication
   */
  customConfig: {
    /**
     * Custom endpoint for password verification
     * @default "/api/nuxt-locker-verify"
     */
    verifyEndpoint: string;

    /**
     * Custom route for the login page
     * @default "/nuxt-locker"
     */
    loginRoute: string;

    /**
     * Custom cookie name for storing the authentication
     * @default "nuxt-locker"
     */
    cookieName: string;
  };
}
