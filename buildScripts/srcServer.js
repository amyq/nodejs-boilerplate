import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import * as auth from './authenticationController';
import * as proxy from './apiProxyController';

const port = 4200;
const app = express();
const compiler = webpack(config);

// Environment :: Production 
// process.env.NODE_ENV = 'development';
// console.log('- - - - - ');
// console.log(process.env);

// envToolbar();
 
/*eslint-disable no-console */


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Proxy the external API to allow machine-to-machine authentication, per the
// Oauth client credentials grant flow.
app.get('/api/:path(*)', [
  auth.authenticateRequest(),
  proxy.proxyRequest(),
  // @todo: add an error handler
]);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
