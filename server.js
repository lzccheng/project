var webpack = require('webpack');
var Server = require('webpack-dev-server');
var Config = require('./webpack.config');

var config = webpack(Config);

var server = new Server(config,{
  contentBase:__dirname+'/public',
  stats:{
    colors:true
  }
}).listen(3000)
