import path from 'path';
import env from 'node-env-file';
import chalk from 'chalk';

/*eslint-disable no-console */

env(path.join(__dirname, '../.env'), {
  raise: false
});

function envOath(vars) {
  let oauth_obj = {};
  oauth_obj.API_BASE_URL = vars.API_BASE_URL;
  oauth_obj.OAUTH_CLIENT_ID = vars.OAUTH_CLIENT_ID;
  oauth_obj.OAUTH_CLIENT_SECRET = vars.OAUTH_CLIENT_SECRET;
  oauth_obj.OAUTH_USER = vars.OAUTH_USER;
  oauth_obj.OAUTH_PASSWORD = vars.OAUTH_PASSWORD;
  return oauth_obj;
}

function envOathValid(obj) {
  console.log(chalk.blue.inverse('Validating OAuth Creds for Lightning'));
  for (var x in obj) {
    if (!obj[x].length) {
      console.log(chalk.red('Missing creditials from .env or Acquia hosting vars'));
      return false;
    }
  }
  console.log(chalk.green('OAuth creditials are valid'));
  return true;
}

export let credOAuth = envOath(process.env);
export let validOAuth = envOathValid(credOAuth);
