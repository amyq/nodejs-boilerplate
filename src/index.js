import './main.css';

// Imports for OAuth / External API
import {
  getContent,
  updateContentLists
} from './api/api';

// Imports for Local Mock  / External API
import {
  getUsers,
  populateAPIDOMUsers,
  getNodes,
  populateAPIDOMNodes
} from './api/mockAPI';

import {
  envToolbar,
  envDump
} from '../buildScripts/envDetect.js';

if (process.env.NODE_ENV === 'development') {
  getUsers().then(result => {
    populateAPIDOMUsers(result.data);
  });
  getNodes().then(result => {
    populateAPIDOMNodes(result.data);
  });
}

if (process.env.NODE_ENV !== 'development') {
  // Populate table of users via API call.
  let typesToGet = ['user', 'page'];
  typesToGet.forEach(type => {
    getContent(type).then(result => {
      // Populate initial API users.
      updateContentLists(result.shift(), type);
    });
  })
}


envToolbar(); // Populate environment toolbar.
envDump(); // Populate environment block.
