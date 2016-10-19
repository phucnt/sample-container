const client = 'client';
const server = 'server';
const both = [client, server];

Package.describe({
  name: 'sample:client-routes',
  version: '0.0.1',
  summary: 'routes package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1'),
  api.use([
    'sample:core'
  ], both);
  api.use([
    'sample:client-core',
    'sample:client-layout',
    'sample:client-demo-component',
  ], client);
  api.addFiles(['client/routes.jsx'], client);
});
