const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const entry = [
    './src/Centrifuge.ts',
];

module.exports = {
    entry: {
        'polyfills': [
            'promise-polyfill',
            'whatwg-fetch',
        ],
        'centrifuge': entry,
        'centrifuge.min': entry
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    plugins: [
        new UglifyJsPlugin({
            include: [
                /\.min\.js$/,
                /polyfills\.js$/,
            ],
            extractComments: false,
            uglifyOptions: {
                minimize: true,
                beautify: false,
                output: {
                    comments: false
                },
                mangle: {
                },
                compress: {
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                    negate_iife: false
                }
            }
        })
    ]
};
