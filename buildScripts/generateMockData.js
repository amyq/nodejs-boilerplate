/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {
  schema_users, schema_nodes
} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json_users = JSON.stringify(jsf(schema_users));

fs.writeFile("./src/api/db_users.json", json_users, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated for Users."));
  }
});

const json_nodes = JSON.stringify(jsf(schema_nodes));

fs.writeFile("./src/api/db_nodes.json", json_nodes, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated for Nodes."));
  }
});
