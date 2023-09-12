const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        modal: './src/modal.js',
        create: './src/create.js',
        storeData: './src/storeData.js',
        formSubmit: './src/formSubmit.js',
        deleteTask: './src/deleteTask.js',
        displayTask: './src/displayTask.js',
        deleteTask: './src/deleteTask.js',
        getToday: './src/getToday.js',
        projectDisplay: './src/projectDisplay.js',
        getProject: './src/getProject.js',
        getImportant: './src/getImportant.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Specify the path to your HTML template file
            title: 'Development',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    },
};
