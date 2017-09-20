import './main.css';

// Imports for OAuth / External API
import {
  getContent,
  updateContentLists
} from './api/api';

// Imports for Local Mock  / External API
import {
  getUsers,
  populateAPIDOM,
  removeAPIUsers
} from './api/mockAPI';

import {
  envToolbar,
  envDump
} from '../buildScripts/envDetect.js';

if (process.env.NODE_ENV === 'development') {
  getUsers().then(result => {
    // Populate initial API users.
    populateAPIDOM(result.data);
    // Remove from local faux db.
    removeAPIUsers(global.document.getElementsByClassName('deleteUser'));
  });
}

if (process.env.NODE_ENV !== 'development') {
  // Populate table of users via API call.
  let typesToGet = ['user', 'page'];
  typesToGet.forEach(type => {
    getContent(type).then(result => {

      // Populate initial API users.
      updateContentLists(result.shift(), type);

      // @todo: this isn't configured to work with the drupal jsonapi.
      // Remove from local faux db.
      // removeAPIUsers(global.document.getElementsByClassName('deleteUser'));
    });
  })
}

// Populate environment toolbar.
envToolbar();

// Populate environment block.
envDump();
