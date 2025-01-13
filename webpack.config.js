const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        open: true
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    // plugins: [new HtmlWebpackPlugin()],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
}