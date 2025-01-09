const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.ts',
    mode:process.env.NODE_ENV === "production" ? "production" : "development",
    module:{rules:[
        {
            test:/\.svg$/,
            use: 'svg-inline-loader'
        },
        {
            test:/\.css$/i,
            use:['style-loader','css-loader']
        },
        {
            test:/\.(?:js|ts|jsx|tsx)$/,
            use: "babel-loader"
        }
    ]},
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    // plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    plugins: [new HtmlWebpackPlugin()],
}