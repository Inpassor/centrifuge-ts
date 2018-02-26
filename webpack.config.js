const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: './src/Centrifuge.ts',
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
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'centrifuge.min.js',
        libraryTarget: 'umd'
    }
    ,
    plugins: [
        new UglifyJsPlugin({
            extractComments: false,
            uglifyOptions: {
                minimize: true,
                beautify: false,
                output: {
                    comments: false
                },
                mangle: {},
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
        }),
        new UnminifiedWebpackPlugin()
    ]
};
