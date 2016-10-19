/* global Package, Npm*/

/* eslint-disable*/
const both = ['server', 'client'];
const server = 'server';
const client = 'client';
/* eslint-enable*/

Package.describe({
  name: 'sample:server-core',
  version: '0.0.1',
  summary: 'Poppi attribute based access control package',
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');

  api.use([
    'sample:core',
    'sample:collection-core',
    'sample:collection-user',
    'meteorhacks:npm',
    'reywood:publish-composite@1.4.2',
  ]);
  api.imply([
    'sample:collection-user'
  ]);

});
