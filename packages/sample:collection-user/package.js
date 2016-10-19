/* global Package*/

/* eslint-disable*/
const both = ['server', 'client'];
const server = 'server';
const client = 'client';
/* eslint-enable*/

Package.describe({
  name: 'sample:collection-user',
  version: '0.0.1',
  summary: 'Sample User collection package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');

  api.use([
    'sample:core',
    'sample:collection-core',
    'accounts-base',
    'accounts-password@1.3.0',
    'accounts-facebook',
    'accounts-google',
    'mizzao:user-status'
  ], both);

  api.imply([
    'accounts-base',
    'accounts-password',
    'accounts-facebook',
    'accounts-google',
  ], both);

  api.addFiles([
    'lib/user.js',
    'lib/userHelpers.js',
  ], both);

  // api.addFiles([
  //   'server/onCreateUser.js',
  // ], server);

  api.export('Users');
});
