const client = 'client';
const server = 'server';
const both = [client, server];

Package.describe({
  name: 'sample:core',
  version: '0.0.1',
  summary: 'core package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');
  api.imply([
    'meteor-base@1.0.4',
    'mobile-experience@1.0.4',
    'mongo',
    'standard-minifier-css@1.2.0',
    'standard-minifier-js@1.2.0',
    'es5-shim',
    'ecmascript',
    'check',
    'momentjs:moment@2.12.0',
    'ramda:ramda@0.19.0',
  ]);
});
