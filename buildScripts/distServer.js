import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import * as auth from './authenticationController';
import * as proxy from './apiProxyController';
import {
  validOAuth
} from '../buildScripts/envAuth.js';

/*eslint-disable no-console */

const port = (process.env.PORT || 8080);
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Proxy the external API to allow machine-to-machine authentication, per the Oauth client credentials grant flow.
if (validOAuth) { // Validate Lighting OAuth creds
  app.get('/api/:path(*)', [
    auth.authenticateRequest(),
    proxy.proxyRequest(),
    // @todo: add an error handler
  ]);
}

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
