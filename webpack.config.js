const path = require('path');
const webpack = require('webpack');
const srcPath = path.join(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
    entry: {
        app: [
            path.join(srcPath, "index"),
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:9090/',
        ],
        common: [
            'react',
            'react-dom'
        ]
    },
    resolve: {
        root: srcPath,
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts', '.tsx', '.css']
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'vendor.js'),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            excludeChunks: ['test'],
            template: path.join(srcPath, "index.html")
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel-loader'],
                include: [srcPath]
            },
            {
                test: /\.(ts|tsx)?$/,
                loaders: ["react-hot", "ts-loader"]
            },
            { test: /\.css?$/, loader: "style!css" },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.scss$/, loader: 'style!css!sass' },
            {
                test: /.*\.(png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.(jpe|jpg)$/,
                loader: 'url?limit=25000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=100000&minetype=application/font-wof'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file"
            }
        ]
    }
}

module.exports = common;