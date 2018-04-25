import path from 'path';
import webpack from 'webpack';
module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve('./public/dist'),
        publicPath: "/dist",
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};