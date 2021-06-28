// pm2 start npm --name "nuxt" -- start
import webpack from 'webpack';

export default {
    ssr    : false,
    target : 'static',
    env    : {
    },
    // mode: 'universal',
    /*
  ** Headers of the page
  */
    head : {
        title                          : 'Just AI Text',
        __dangerouslyDisableSanitizers : ['script'],
        meta                           : [
            { charset : 'utf-8' },
            { name : 'viewport', content : 'width=device-width, initial-scale=1' },
            { hid : 'description', name : 'description', content : '' },
            { name : 'msapplication-TileColor', content : '#ffffff' },
            { name : 'msapplication-TileImage', content : '/favicon/ms-icon-144x144.png' },
            { name : 'theme-color', content : '#ffffff' }
        ],
        link : [
            // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel : 'apple-touch-icon', sizes : '57x57', href : '/favicon/apple-icon-57x57.png' },
            { rel : 'apple-touch-icon', sizes : '60x60', href : '/favicon/apple-icon-60x60.png' },
            { rel : 'apple-touch-icon', sizes : '72x72', href : '/favicon/apple-icon-72x72.png' },
            { rel : 'apple-touch-icon', sizes : '76x76', href : '/favicon/apple-icon-76x76.png' },
            { rel : 'apple-touch-icon', sizes : '114x114', href : '/favicon/apple-icon-114x114.png' },
            { rel : 'apple-touch-icon', sizes : '120x120', href : '/favicon/apple-icon-120x120.png' },
            { rel : 'apple-touch-icon', sizes : '144x144', href : '/favicon/apple-icon-144x144.png' },
            { rel : 'apple-touch-icon', sizes : '152x152', href : '/favicon/apple-icon-152x152.png' },
            { rel : 'apple-touch-icon', sizes : '180x180', href : '/favicon/apple-icon-180x180.png' },
            { rel : 'icon', sizes : '192x192', href : '/favicon/android-icon-192x192.png', type : '' },
            { rel : 'icon', sizes : '32x32', href : '/favicon/favicon-32x32.png', type : 'image/png' },
            { rel : 'icon', sizes : '96x96', href : '/favicon/favicon-96x96.png', type : 'image/png' },
            { rel : 'icon', sizes : '16x16', href : '/favicon/favicon-16x16.png', type : 'image/png' },
            { rel : 'manifest', href : '/favicon/manifest.json' }
        ],
        script : [
        ]
    },
    router : {
    },
    server : {
        host : '0.0.0.0',
        port : 3000
    },
    /*
  ** Customize the progress-bar color
  */
    components : true,
    /*
  ** Global CSS
  */
    render     : {
        bundleRenderer : {
            shouldPreload : (file, type) => {
                //  return ['script', 'style', 'font'].includes(type)
            }
        }
    },
    css : [
        //  '~/assets/css/styles.css',
        //  '~/css/main.css',

        // 'filepond/dist/filepond.min.css',
        // 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css',
        'bootstrap/dist/css/bootstrap.min.css',
        // 'owl.carousel/dist/assets/owl.carousel.min.css',
        // 'owl.carousel/dist/assets/owl.theme.default.min.css',
        // 'jquery-nice-select/css/nice-select.css',
        'element-ui/lib/theme-chalk/index.css',
        '~/scss/styles.scss',
        // 'sweetalert2/dist/sweetalert2.min.css',

    ],
    /*
  ** Plugins to load before mounting the App
  */
    plugins : [
        { src : '~plugins/bootstrap.js', ssr : false },
        { src : '~plugins/element.js', ssr : false },
        // { src: "~plugins/owl.carousel.js", ssr: false, },
        // { src : '~plugins/tinymce.js', ssr : false }
        // { src : '~plugins/filepond.js', ssr : false },
        // { src : '~plugins/sweetalert2.js', ssr : false },
        // { src : '~plugins/vue2-datable.js', ssr : false },
        // { src : '~/plugins/ymapPlugin.js', ssr : false },
        // { src : '~/plugins/v-inputmask.js', ssr : false },
        // { src : '~/plugins/vue-fusioncharts.js', ssr : false }
        // { src: '~/plugins/vk-ui.js', ssr: false },//
        // { src: '~/plugins/socket-io.js', ssr: false }
        // { src: '~plugins/qr-code.js', ssr: false, },
    ],
    // env : {
    //
    // },
    /*
  ** Nuxt.js dev-modules
  */
    buildModules : [
        // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module'
    ],
    // moment : {
    //     defaultLocale : 'ru',
    //     locales       : ['ru']
    // },
    // styleResources : {
    //     scss : [
    //
    //     ]
    // },
    /*
  ** Nuxt.js modules
  */
    modules : [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // '@nuxtjs/toast',
        // '@nuxtjs/svg',
        // '@nuxtjs/moment',
        // 'cookie-universal-nuxt',
        // 'nuxt-clipboard2',
        '@nuxt/http',
        // ['nuxt-i18n',
        //     {
        //         locales : [
        //             { code : 'en', iso : 'en-US', file : 'en-US.js', dir : 'ltr' },
        //             { code : 'de', iso : 'de-DE', file : 'en-US.js', dir : 'ltr' },
        //             { code : 'ru', iso : 'ru-RU', file : 'en-US.js', dir : 'ltr' },
        //             { code : 'jp', iso : 'ja-JP', file : 'en-US.js', dir : 'ltr' },
        //             { code : 'fr', iso : 'fr-FR', file : 'en-US.js', dir : 'ltr' }
        //         ],
        //         defaultLocale : 'en',
        //         langDir       : '~/locales/'
        //     }
        // ],
        // ['vue-scrollto/nuxt', { duration : 700 }]
    ],
    /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
    axios : {
        baseURL : (process.env.NODE_ENV === 'production') ? `http://${process.env.PROD_IP}/` : `http://localhost:${process.env.PORT}/`
    },
    /*
  ** Build configuration
  */
    build : {
        filenames : {
            app   : ({ isDev }) => isDev ? '[name].js' : '[name][hash:7].js',
            chunk : ({ isDev }) => isDev ? '[name].js' : '[name][hash:7].js',
            css   : ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
            img   : ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
            font  : ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
            video : ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
        },
        transpile : ['@nuxtjs/svg'],
        //  vendor: ["jquery", "bootstrap", "owl.carousel"],
        babel     : {
            presets({ isServer }) {
                return [[require.resolve('@nuxt/babel-preset-app'), { buildTarget : isServer ? 'server' : 'client', corejs : { version : 3 } }]];
            }
        },
        plugins : [
            new webpack.ProvidePlugin({
                $               : 'jquery',
                jQuery          : 'jquery',
                'window.jQuery' : 'jquery',
                // niceSelect      : 'jquery-nice-select'
            })
        ],
        loaders : {
            file : { esModule : false },
            url  : { esModule : false }
        },
        cache : false,

        extend(config, { isDev, isClient }) {
            if (isClient) {
                config.node = {
                    fs            : 'empty',
                    child_process : 'empty',
                    dgram         : 'empty'
                };
            }
        }
    }
};
