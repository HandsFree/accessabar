const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { resolve } = require('path');
// const threadLoader = require('thread-loader');
// const { length: cpuCount } = require('os').cpus();

//
// ─── BANNERS ────────────────────────────────────────────────────────────────────
//

const prodBanner = `Accessabar
Copyright (C) 2018  Elliott Judd
------------
License:
https://www.gnu.org/licenses/agpl.txt
Authors:
Elliott Judd <elliott.judd@hands-free.co.uk>`;

const devBanner = `--- Compiled in Developer Mode ---

Accessabar
Copyright (C) 2018  Elliott Judd
------------
License:
https://www.gnu.org/licenses/agpl.txt
Authors:
Elliott Judd <elliott.judd@hands-free.co.uk>`;

//
// ─── LOADER OPTIONS ─────────────────────────────────────────────────────────────
//

// Thread loader can reduce performance for small builds, only use when needed.
// threadLoader.warmup({
//     workers: cpuCount - 1,
//     workerParallelJobs: 50,
// }, [
//     'babel-loader',
//     'postcss-loader',
// ]);

const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
    },
};

const cssLoader = {
    loader: 'css-loader',
    options: {
        importLoaders: 1,
    },
};

const imageFileLoader = {
    loader: 'file-loader',
    options: {
        outputPath: 'images/',
    },
};

let fontFileLoader = {
    loader: 'file-loader',
    options: {
        outputPath: 'fonts/',
    },
};

const optLoaders = [
    {
        loader: 'cache-loader',
        options: {
            cacheDirectory: resolve(__dirname, 'node_modules', '.cache', 'cache-loader'),
        },
    },
    // {
    //     loader: 'thread-loader',
    //     options: {
    //         workers: cpuCount - 1,
    //         workerParallelJobs: 50,
    //     },
    // },
];

//
// ─── CONFIG FUNCTION ────────────────────────────────────────────────────────────
//

const config = (env) => {
    const dev = env.mode === 'development';
    const devServer = env.server === 'enabled';
    const dash = env.dash === 'enabled';
    const verbose = env.verbose === 'enabled';

    const entries = {
        accessabar: './',
    };

    if (env.npm && env.npm === 'enabled') {
        fontFileLoader = {
            loader: 'file-loader',
            options: {
                emitFile: false,
                name: '[name].[ext]',
                publicPath: 'https://cdn.jsdelivr.net/gh/HandsFree/accessabar/src/fonts/',
            },
        };
    }

    /* eslint-disable no-use-before-define */
    return mainSettings(entries, dev, devServer, dash, verbose);
};

//
// ─── MAIN CONFIG ────────────────────────────────────────────────────────────────
//

const mainSettings = (entries, dev, devServer, dash, verbose) => {
    // Plugin Options //

    const sharedPlugins = [
        new Webpack.BannerPlugin({
            banner: dev ? devBanner : prodBanner,
        }),
        new ResourceHintWebpackPlugin(),
        new HardSourceWebpackPlugin({
            cacheDirectory: `${resolve(__dirname, 'node_modules', '.cache', 'hard-source')}/[confighash]`,
            info: {
                level: 'warn',
            },
        }),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: resolve(__dirname, 'tsconfig.json'),
            tslint: resolve(__dirname, 'tslint.json'),
            checkSyntacticErrors: true,
            watch: resolve(__dirname, 'src'),
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ];

    return {
        context: resolve(__dirname, 'src'),
        entry: entries,
        output: {
            publicPath: '/dist/accessabar/',
            path: resolve(__dirname, 'public', 'dist', 'accessabar'),
            filename: '[name].bundle.js',
            // Export options
            library: 'Accessabar', // name
            libraryExport: 'default', // exported module
            libraryTarget: 'window', // location
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        ...optLoaders,
                        babelLoader,
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    enforce: 'pre',
                    use: [
                        'source-map-loader',
                        ...optLoaders,
                        babelLoader,
                    ],
                },
                {
                    test: /\.(css|pcss)$/,
                    use: [
                        'css-hot-loader',
                        MiniCssExtractPlugin.loader,
                        cssLoader,
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        imageFileLoader,
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: [
                        fontFileLoader,
                    ],
                },
                {
                    test: /\.json5$/,
                    use: [
                        'json5-loader',
                    ],
                },
            ],
        },
        plugins: dev ? [
            ...sharedPlugins,
            ...(devServer ? [
                new Webpack.HotModuleReplacementPlugin(),
                new BrowserSyncPlugin({
                    open: false,
                    host: 'localhost',
                    port: '8080',
                    proxy: 'http://localhost:8090/',
                }, { reload: false }),
            ] : []),
            ...(dash ? [new DashboardPlugin()] : []),
        ] : [
            ...sharedPlugins,
            new OfflinePlugin({
                externals: [
                    '/index.html',
                ],
            }),
        ],
        devtool: dev ? 'inline-source-map' : false,
        devServer: {
            contentBase: './public/',
            hot: true,
            hotOnly: true,
            host: 'localhost',
            open: false,
            publicPath: 'http://localhost:8080/dist/accessabar/',
            port: '8090',
            compress: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        mode: dev ? 'development' : 'production',
        optimization: {
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    cache: true,
                }),
                new OptimizeCSSAssetsPlugin(),
            ],
        },
        stats: verbose ? 'verbose' : {
            errors: true,
            errorDetails: false,
            assets: true,
            builtAt: false,
            cached: false,
            cachedAssets: false,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            reasons: false,
            version: false,
            source: false,
            warnings: false,
            publicPath: false,
            entrypoints: false,
            timings: false,
        },
    };
};

module.exports = config;
