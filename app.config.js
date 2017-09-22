export default function appConfig(environment = 'production') {
  return {
    environment: environment,
    baseUrl: (environment === 'development') ? 'http://localhost' : 'http://headlessnightlyth3vcdx4ci.devcloud.acquia-sites.com',
    apiPrefix: '/jsonapi',
    resourcePaths: {
      user: '/user/user',
      page: '/node/page',
    }
  }
}
