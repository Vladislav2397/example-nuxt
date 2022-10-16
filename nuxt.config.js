import head from './public/head'

export default {
    srcDir: 'src',
    dir: {
        static: '../public',
        store: 'app/providers/store'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head,

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        [
            '@nuxtjs/router',
            {
                path: 'src/app/providers/router',
                fileName: 'index.ts',
            },
        ],
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config) {
            config.module.rules.push({
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: [
                            {
                                loader: 'pug-bem-plain-loader',
                                options: {
                                    b: true, // default 'b-'
                                    e: '__',
                                    m: '--'
                                }
                            }
                        ]
                    },

                    {
                        use: ['raw-loader', 'pug-bem-plain-loader']
                    }
                ]
            })
        }
    },
}
