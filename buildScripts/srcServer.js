import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import * as auth from './authenticationController';
import * as proxy from './apiProxyController';

const port = (process.env.PORT || 8080);
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Proxy the external API to allow machine-to-machine authentication, per the
// Oauth client credentials grant flow.
if (process.env.NODE_ENV !== 'development') { // skip OAuth for local mock api.
  app.get('/api/:path(*)', [
    auth.authenticateRequest(),
    proxy.proxyRequest(),
    // @todo: add an error handler
  ]);
}

/*eslint-disable no-console */
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
