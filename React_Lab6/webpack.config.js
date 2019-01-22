const path = require('path');
const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');
module.exports = {
    entry: path.resolve(src, 'index.js'),
    output: {
        path: build,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                    }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {name : "static/img/[name].[ext]"}
                  }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    mode: 'production', // | 'development' | 'none'
    devServer:{
        contentBase: build,
        compress: true,
        port: 8081
    }
};
