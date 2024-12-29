<script setup lang="ts">
import { ref, useRuntimeConfig } from "#imports";

useHead({
  title: "Protected Page",
  meta: [
    { name: "description", content: "This page is locked behind a password. Please enter the correct password to continue." },
  ],
});

const password = ref("");
const error = ref("");
const isLoading = ref(false);
const canSubmit = ref(true);
const { contactEmail } = useRuntimeConfig().public.nuxtLocker;

async function submit() {}
</script>

<template>
  <div class="nuxt-locker">
    <div class="nuxt-locker-container">
      <h1 class="nuxt-locker-title">
        Protected Page
      </h1>
      <p class="nuxt-locker-description">
        This page is locked behind a password. Please enter the correct password to continue.
      </p>

      <form @submit.prevent="submit">
        <!-- Input Group with SVG Icon -->
        <div class="nuxt-locker-input-group">
          <span class="nuxt-locker-input-icon" aria-hidden="true">
            <!-- Key icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#8f8f8e"
                d="M12.02 8.846q.769 0 1.307-.538T13.866 7t-.539-1.308t-1.308-.538t-1.307.538T10.173 7t.539 1.308t1.307.538m.006 12.914q-.161 0-.298-.053t-.267-.178l-1.537-1.442q-.111-.106-.17-.24q-.059-.133-.084-.276q-.025-.142.028-.291q.053-.15.14-.28l.932-1.211l-1.05-1.358q-.092-.112-.135-.229t-.043-.26t.043-.26t.116-.228l.82-1.07v-2.85q-1.34-.355-2.285-1.607T7.289 7q0-2 1.365-3.366q1.365-1.365 3.365-1.365t3.366 1.365T16.75 7q0 1.698-.958 2.941t-2.273 1.593v8.7q0 .162-.056.311t-.186.28l-.698.698q-.125.125-.259.18q-.133.057-.295.057"
              />
            </svg>
          </span>
          <input
            id="input"
            v-model="password"
            type="password"
            placeholder="Enter password to unlock"
            aria-label="Password"
            required
          >
        </div>

        <!-- Error Message -->
        <p v-if="error" class="nuxt-locker-error">
          {{ error }}
        </p>

        <!-- Submit Button -->
        <button type="submit" :disabled="!password || isLoading || !canSubmit">
          Unlock
        </button>
      </form>

      <p class="nuxt-locker-info">
        Don't have the password?
        <span>
          Contact the site administrator
          <span v-if="contactEmail" class="nuxt-locker-info-email">
            at
            <NuxtLink
              :external="true"
              :href="`mailto:${contactEmail}`"
            >{{ contactEmail }}</NuxtLink>
          </span>
          for assistance.
        </span>
      </p>
    </div>
  </div>
</template>
