// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt3 UI",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: "description",
          content: "",
        },
        {
          name: "keywords",
          content: ""
        },
        { name: "author", content: "Abdelmo’men Elshatory" },
      ],
      htmlAttrs: {
        class: "",
        lang: "",
      },
      script: [],
      link: [
        // {
        //   rel: "icon",
        //   type: "image/svg",
        //   href: `/images/${process.env.LOGO}.svg`,
        // },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'nuxt-aos'
  ],
  css: [],

  imports: {
    dirs: ["stores"],
  },

  ui: {
    icons: "all",
  },

  colorMode: {
    preference: 'light'
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'ar',
  },

  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //     cssnano:
  //       process.env.NODE_ENV === "production"
  //         ? { preset: ["default", { discardComments: { removeAll: true } }] }
  //         : false, // disable cssnano when not in production
  //   },
  // },

  runtimeConfig: {
    // jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,

    public: {
      // logo: process.env.LOGO,
    },
  },
})
