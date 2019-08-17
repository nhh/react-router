// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const website = {
    watchOptions: {
        ignored: ['*.php', '*.yaml', '*.md', '*.css', '*.zip', '*.sh', 'dist/**/*', 'node_modules']
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/assets/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8080,
        hot: false,
        inline: false,
        publicPath: "/assets/",
        historyApiFallback: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
        new WorkboxPlugin.GenerateSW({
            // Do not precache images
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],

            // Define runtime caching rules.
            runtimeCaching: [{
                // Match any request that ends with .png, .jpg, .jpeg or .svg.
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

                // Apply a cache-first strategy.
                handler: 'CacheFirst',

                options: {
                    // Use a custom cache name.
                    cacheName: 'images',

                    // Only cache 10 images.
                    expiration: {
                        maxEntries: 10,
                    },
                },
            }],
        })
    ]
};

module.exports = [website];