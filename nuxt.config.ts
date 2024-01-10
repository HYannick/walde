// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic"],
  app: {
    head: {
      title: 'Waldè Maroowo'
    },
    pageTransition: { name: 'page', mode: 'out-in', appear: true },
  },
  routeRules: {
    '/': {ssr: false},
    '/story': {ssr: false},
    '/actions': {ssr: false},
    '/actions/:uid': {ssr:false},
    '/contact': {ssr: false},
  },
  css: [
    '~/assets/styles/main.scss',
    'splitting/dist/splitting.css',
    'splitting/dist/splitting-cells.css'
  ],
  prismic: {
    endpoint: "walde",
    clientConfig: {
      routes: [
        {
          type: 'home',
          path: '/',
        },
        {
          type: 'story',
          path: '/story'
        },
        {
          type: 'actions',
          path: '/actions'
        },
        {
          type: 'action',
          path: '/actions/:uid'
        },
        {
          type: 'contact',
          path: '/contact'
        }
      ]
    }
  },
  vite: {
    plugins: [
      svgLoader(), // https://github.com/jpkleemans/vite-svg-loader#readme,
    ],
  },
})