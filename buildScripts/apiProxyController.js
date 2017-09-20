import env from 'node-env-file';
import path from 'path';
import requestPromise from 'request-promise';
import appConfig from '../app.config';
import {
  environment
} from './envDetect.js';

env(path.join(__dirname, '../.env'), {
  raise: false
});

export function proxyRequest() {
  return function (req, res, next) {
    let options = {
      uri: appConfig(environment || 'production').baseUrl + appConfig().apiPrefix + '/' + req.params.path,
      headers: Object.assign(req.headers, {
        'Content-Type': 'application/vnd.api+json',
        'accept': 'application/vnd.api+json',
        'host': undefined,
      })
    };
    requestPromise(options)
      .then((result) => {
        return JSON.parse(result);
      }).then((parsed) => {
        res.json(parsed);
      })
      .catch((err) => {
        next(err)
      });
  }
}
