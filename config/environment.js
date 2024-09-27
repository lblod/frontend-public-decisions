'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'frontend-public-decisions',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    appName: 'Publieke Besluitendatabank',
    acmidm: {
      clientId: '{{OAUTH_API_KEY}}',
      scope: 'openid vo profile abb_besluitendatabank',
      authUrl: '{{OAUTH_BASE_URL}}',
      logoutUrl: '{{OAUTH_LOGOUT_URL}}',
      authRedirectUrl: '{{OAUTH_REDIRECT_URL}}',
    },
    // This config can be removed once the auto-startup logic is removed from ember-plausible:
    // https://github.com/redpencilio/ember-plausible/issues/4
    'ember-plausible': {
      enabled: false,
    },
    plausible: {
      domain: '{{ANALYTICS_APP_DOMAIN}}',
      apiHost: '{{ANALYTICS_API_HOST}}',
    },
    authEnabled: '{{AUTH_ENABLED}}'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  return ENV;
};
