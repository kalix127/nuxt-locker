import { defineNuxtConfig } from "nuxt/config";
import NuxtLockerModule from "../../../src/module";

export default defineNuxtConfig({
  modules: [NuxtLockerModule],
  nuxtLocker: {
    password: "password",
    jwtSecret: "secret",
  },
});
