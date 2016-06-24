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

io.on('connection', ( skt ) => {

  console.log('New client connected!');

  let twitter = new twitterController( io, skt );

  twitter.getTweets();
  // twitter.subscribeStream();

});