import express from 'express';
import http from 'http';
import socket from 'socket.io';
import cors from 'cors';

const app = express();
const httpServer = http.Server( app );
const io = socket( httpServer );
const router = express.Router();

const isProduction = process.env.NODE_ENV === 'production';
let port = isProduction ? process.env.PORT : 3000;
if (!port) port = 3000;

import twitterController from './controllers/twitter';
import routes from './routes';

app.enable( 'trust proxy' );

app.use( '/', routes );

app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/dist');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var server = httpServer.listen(process.env.PORT || port, () => {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

if (!isProduction) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackConfig = require('../webpack.config.js');

  new WebpackDevServer(webpack(webpackConfig), {
    hot: false,
    noInfo: true,
    quiet: false,
    proxy: { '*': 'http://localhost:3000' },
    stats: { colors: true },
  }).listen(8080, 'localhost', err => {
    if (err) console.log(err);
    console.log('Webpack Dev Server listening at 8080');
  });
}

io.on('connection', ( skt ) => {

  console.log('New client connected!');

  let twitter = new twitterController( io, skt );

  twitter.getTweets();

});
