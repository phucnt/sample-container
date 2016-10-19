/* global Package */

/*eslint-disable */
const both = ['server', 'client'];
const server = 'server';
const client = 'client';
/*eslint-enable */

Package.describe({
  name: 'sample:collection-core',
  version: '0.0.1',
  summary: 'Poppi core collections package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');

  api.use([
    'sample:core',
    'aldeed:collection2@2.9.0',
    'matb33:collection-hooks@0.8.1',
    'dburles:collection-helpers@1.0.4',
  ]);

  api.imply([
    'sample:core',
    'aldeed:collection2@2.9.0',
    'matb33:collection-hooks@0.8.1',
    'dburles:collection-helpers@1.0.4',
  ]);

  api.addFiles([
    'lib/ModifiedAt.js',
    'lib/CreatedAt.js',
    'lib/Collections.js',
  ]);

  api.export([
    'ModifiedAt',
    'CreatedAt',
    'Collections',
  ]);
});
