import {
  environment
} from './buildScripts/envDetect.js';

export default {
  environment: environment,
  baseUrl: process.env.API_BASE_URL || 'http://headlessnightlyth3vcdx4ci.devcloud.acquia-sites.com',
  apiPrefix: '/jsonapi',
  resourcePaths: {
    user: '/user/user',
    userRole: 'user_role/user_role',
    page: '/node/page',
  }
}