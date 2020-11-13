
const path = require('path');
const rootPath = path.join( __dirname, '../');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: rootPath + 'dist',
        filename: 'bundle.js'
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
            use: 'ts-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    },
    optimization: {
        minimize: true
    }
};