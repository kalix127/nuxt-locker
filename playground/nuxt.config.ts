export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: true },
  compatibilityDate: "2024-12-25",
  nuxtLocker: {
    contactEmail: "admin@example.com",
  },
});
