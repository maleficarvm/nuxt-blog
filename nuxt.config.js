import pkg from "./package";
import axios from "axios";

export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "yandex-verification", content: "bb534n5bn3b53b45nb3n45b" },
      { name: "google-site-verification", content: "fd7vfd8v8d7fv7fd87vd8" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/app-components.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/google-analytics", { id: "UA-XXXX" }],
    [
      "@nuxtjs/yandex-metrika",
      { id: "XXXX", webvisor: false, clickmap: true, trackLinks: true }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vue", "axios"]
  },
  generate: {
    routes: function() {
      return axios
        .get("https://blog-nuxt-4913a.firebaseio.com/posts.json")
        .then(res => {
          //Get id
          const postsArray = [];
          for (let key in res.data) {
            postsArray.push({ ...res.data[key], id: key });
          }

          //Routes
          return postsArray.map(post => {
            return "/blog/" + post.id;
          });
        });
    }
  }
};
