const client = 'client';
const server = 'server';
const both = [client, server];
Package.describe({
  name: 'sample:client-layout',
  version: '0.0.1',
  summary: 'client layout',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');
  api.use([
    'sample:core',
  ], both);

  api.use([
    'sample:client-core'
  ], client);

  api.addFiles([
    'client/layout.jsx',
  ], client);
  api.addAssets([
    'client/layout.html',
  ], client);
  api.export('MainLayout');
});
