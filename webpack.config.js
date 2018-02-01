const path = require('path');
const webpack = require('webpack');
const polyfillInjector = require('webpack-polyfill-injector');

const entry = `webpack-polyfill-injector?${JSON.stringify({
    modules: ['./src/Centrifuge.ts']
})}!`;

module.exports = {
    entry: {
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
        new polyfillInjector({
            polyfills: [
                'Promise',
                'fetch'
            ]
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            beautify: false,
            output: {
                comments: false
            },
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
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
        })
    ]
};
