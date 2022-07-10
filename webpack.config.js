const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        dom: './src/dom.js',
        storage: './src/storage.js',
        tasks: './src/tasks.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        'filename': '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};