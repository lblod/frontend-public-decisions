'use strict';

module.exports = {
  generateTests: false,
  allowedVersions: {
    // We temporarily allow multiple ember-simple-auth (and subdeps) versions until all addons support v6
    'ember-simple-auth': '*',
    'ember-cookies': '*',
  },
};
