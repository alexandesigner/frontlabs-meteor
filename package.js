Package.describe({
  name: 'alexandesigner:frontlabs',
  version: '0.0.1',
  summary: 'A Meteor front-end labs that helps you build fast an modern web and mobile apps.',
  git: 'https://github.com/allanalexandre/frontlabs-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('frontlabs.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('alexandesigner:frontlabs');
  api.addFiles('frontlabs-tests.js');
});
