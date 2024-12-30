# Nuxt Locker

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

**Nuxt Locker** is a lightweight (13.2 kB) module that lets you lock down and protect pages with basic auth. Perfect for demos, staging sites, or keeping web crawlers at bay. Just drop it in, set a password, and you're done - no complex setup required.

> **⚠️ Warning:** This module is **not recommended for production** environments. It lacks advanced security features and should only be used for demo purposes or limited access scenarios.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Documentation](nuxt-looker.vercel.app)

## Features

- **Drop-in Solution:** Just install, add a few lines of config, and you're good to go
- **Simple Password Protection:** Lock down pages with a basic password - nothing fancy but gets the job done
- **Fully Customizable:** Configure everything from protected routes and cookie names to styling.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npm i nuxt-locker
```

### Generate JWT Secret

Generate a secure JWT secret by running this using Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'));"
```

### Create Environment Variables

Add these variables to your `.env` file:

```env
NUXT_LOCKER_PASSWORD=your-password
NUXT_LOCKER_JWT_SECRET=your-generated-jwt-secret
```

### Add to Nuxt Config

Add `nuxt-locker` to your Nuxt config:

```ts
export default defineNuxtConfig({
  modules: [
    "nuxt-locker",
  ],
});
```

That's it! You can now use **Nuxt Locker** in your Nuxt app 🚀

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  # Install dependencies
  pnpm install

  # Generate type stubs
  pnpm dev:prepare

  # Develop with the playground
  pnpm dev

  # Build the playground
  pnpm dev:build

  # Develop with the docs
  pnpm docs:dev

  # Build the docs
  pnpm docs:build

  # Run ESLint
  pnpm lint
  pnpm lint:fix

  # Run Vitest
  pnpm test
  pnpm test:watch

  # Build the module
  pnpm prepack
  ```
</details>

## Credits

- [shadcn-docs-nuxt](https://github.com/ZTL-UwU/shadcn-docs-nuxt) - For providing the template for this documentation
- [nuxt/module-builder](https://github.com/nuxt/module-builder) - From the official Nuxt team that provided the default template to create a Nuxt module

## License

[MIT](https://github.com/kalix127/nuxt-locker/blob/main/LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-locker/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-locker

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-locker.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-locker

[license-src]: https://img.shields.io/npm/l/nuxt-locker.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-locker

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
