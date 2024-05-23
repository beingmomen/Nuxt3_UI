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
          content: "Welcome to my personal website I'm [Your Name], a passionate [Your Profession/Interest] with over [Number of Years of Experience] years of experience. Explore my portfolio to see my work, learn more about my journey, and get in touch to discuss potential collaborations. Let's create something amazing together",
        },
        {
          name: "keywords",
          content: ""
        },
        { name: "author", content: "Abdelmo’men Elshatory" },
      ],
      htmlAttrs: {
        class: "",
        lang: "ar",
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
  nitro: {
    compressPublicAssets: true,
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
    'nuxt-aos',
    '@nuxtjs/robots',
    '@formkit/auto-animate/nuxt'
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
