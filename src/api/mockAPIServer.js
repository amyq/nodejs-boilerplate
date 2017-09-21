import jsonServer from 'json-server';
import {
  Serializer as JSONAPISerializer
} from 'jsonapi-serializer';

let router_users = jsonServer.router('src/api/db_users.json');
let router_nodes = jsonServer.router('src/api/db_nodes.json');

let UserSerializer = new JSONAPISerializer('users', {
  attributes: ['id', 'userName', 'email']
});

let NodeSerializer = new JSONAPISerializer('nodes', {
  attributes: ['id', 'userName', 'email']
});

router_users.render = (req, res) => {
  let data = res.locals.data;
  if (req.path.includes('/users') && data) {
    res.json(UserSerializer.serialize(data));
  }
}

router_nodes.render = (req, res) => {
  let data = res.locals.data;
  if (req.path.includes('/nodes') && data) {
    res.json(NodeSerializer.serialize(data));
  }
}

// JSONServer for Users/
jsonServer
  .create()
  .use(jsonServer.defaults())
  .use(router_users)
  .listen(8081, function () {
    console.log('Mock API Server for Users is running.');
  });

// JSONServer for Nodes/
jsonServer
  .create()
  .use(jsonServer.defaults())
  .use(router_nodes)
  .listen(8082, function () {
    console.log('Mock API Server for Nodes is rrunning.');
  });
