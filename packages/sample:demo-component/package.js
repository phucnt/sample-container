const client = 'client';
const server = 'server';
const both = [client, server];

Package.describe({
  name: 'sample:client-demo-component',
  version: '0.0.1',
  summary: 'sample container component',
});

Package.onUse(function(api) {
  api.use([
    'sample:core',
  ], both);
  api.use([
    'sample:client-core'
  ], client);
  api.addFiles([
    'client/components/DemoConstants.js',
    'client/components/DemoHelpers.js',
    'client/components/DemoHandlers.js',
    'client/components/DemoLogicFunc.js',
    'client/components/Demo.jsx',
    'client/components/DemoContainer.jsx',
  ], client);
  api.export('DemoContainer');

})
