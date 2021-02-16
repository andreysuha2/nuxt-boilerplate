const webpack = require("webpack"),
    path = require("path");
require("./env.config");

module.exports = {
    vue: { config: { productionTip: false } },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-boilerplate',
        htmlAttrs: { lang: 'en' },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: "~/assets/scss/main.scss", lang: "scss" }
    ],

    styleResources: {
        scss: [
            'assets/scss/variables/main.scss',
            'assets/scss/_mixins.scss'
        ]
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/IconFont'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/style-resources'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, { isDev, isClient }) {
            if(isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }

            config.module.rules.push({
                test: /plugins\/IconFont\/index\.js$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'webfonts-loader',
                        options: { publicPath: config.output.publicPath }
                    }
                ]
            });

            config.plugins.push(
                new webpack.DefinePlugin({ isDev }),
                new webpack.ProvidePlugin({ "dl": [ path.resolve(__dirname, "./assets/js/DevLogger.js"), "default" ] })
            );
            if(isClient) {
                config.devtool = isDev ? "source-map": "none";
            }

            const aliases = {
                "@assets": path.resolve(__dirname, "./assets"),
                "@lib": path.resolve(__dirname, "./assets/js"),
                "@scss": path.resolve(__dirname, "./assets/scss"),
                "@fonts": path.resolve(__dirname, "./assets/fonts"),
                "@components": path.resolve(__dirname, "./components"),
                "@globalComponents": path.resolve(__dirname, "./components/Global"),
                "@ui": path.resolve(__dirname, "./components/UI"),
                "@helpers": path.resolve(__dirname, "./assets/js/helpers")
            };

            Object.assign(config.resolve.alias, aliases);
        }
    }
};
