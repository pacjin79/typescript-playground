const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const path = require('path');
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: 'www',
    filename: 'bundle.js',
    hot: true,
    publicPath: '/',
    stats: {
        color: true
    }
});

server.listen(9090, 'localhost', ()=>{});