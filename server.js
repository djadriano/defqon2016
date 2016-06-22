import express from 'express';
import path from 'path';
import cors from 'cors';
import ejs from 'ejs';

import indexRouter from './server/routes/index';

const app = express();
const router = express.Router();

app.enable('trust proxy');

app.use( '/', indexRouter );

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

const server = app.listen(process.env.PORT || 5000, () => {

  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
