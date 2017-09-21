import 'whatwg-fetch';

const baseUrl_Users = 'http://localhost:8081/users';
const baseUrl_Nodes = 'http://localhost:8082/nodes';

export function getUsers() {
  return fetchUsers('users');
}

export function getNodes() {
  return fetchNodes('nodes');
}

function fetchUsers() {
  return fetch(baseUrl_Users).then(onSuccess, onError);
}

function fetchNodes() {
  return fetch(baseUrl_Nodes).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

export function populateAPIDOMUsers(result) {

  global.document.getElementById('userAPI').innerHTML = '<h4>API Data from: ' + baseUrl_Users + '</h4>';
  global.document.getElementById('userAPI').innerHTML += '<table><thead><th>ID</th><th>User Name</th><th>Email</th></thead><tbody id="users"></tbody></table>';

  let usersBody = "";
  result.forEach(user => {
    usersBody += `<tr>
        <td>${user.id}</td>
        <td>${user.attributes['user-name']}</td>
        <td>${user.attributes.email}</td>
        </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

}

export function populateAPIDOMNodes(result) {

  global.document.getElementById('pageAPI').innerHTML = '<h4>API Data from: ' + baseUrl_Nodes + '</h4>';
  global.document.getElementById('pageAPI').innerHTML += '<table><thead><th>ID</th><th>User Name</th><th>Email</th></thead><tbody id="nodes"></tbody></table>';

  let nodesBody = "";
  result.forEach(nodes => {
    nodesBody += `<tr>
          <td>${nodes.id}</td>
          <td>${nodes.attributes['user-name']}</td>
          <td>${nodes.attributes.email}</td>
          </tr>`
  });

  global.document.getElementById('nodes').innerHTML = nodesBody;

}


function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
