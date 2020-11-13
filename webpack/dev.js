
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const rootPath = path.join(__dirname, '../');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: rootPath + 'public',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: rootPath + 'public',
        compress: true,
        port: 5000,
        overlay: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            ['~']: rootPath + 'src' 
        }
    },
    module: {
        rules: [ {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
                // Use fork-ts-checker-webpack-plugin for detailed debug info
                transpileOnly: true
            },
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.[tj]sx?$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        } ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
};