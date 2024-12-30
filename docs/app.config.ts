export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "Nuxt Locker",
      description: "A Nuxt module for protecting pages with a very simple authentication.",
      ogImage: "/og-image.png",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.5,
    },
    header: {
      title: "Nuxt Locker",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo.svg",
      },
      nav: [],
      links: [{
        icon: "lucide:github",
        to: "https://github.com/kalix127/nuxt-locker",
        target: "_blank",
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      padded: true,
    },
    footer: {
      credits: "Copyright © 2024 Nuxt Locker. All rights reserved.",
      links: [{
        icon: "lucide:github",
        to: "https://github.com/kalix127/nuxt-locker",
        target: "_blank",
      }],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [{
        title: "Star on GitHub",
        icon: "lucide:star",
        to: "https://github.com/kalix127/nuxt-locker",
        target: "_blank",
      }, {
        title: "Create Issues",
        icon: "lucide:circle-dot",
        to: "https://github.com/kalix127/nuxt-locker/issues",
        target: "_blank",
      }],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
