// Package Info
Package.describe({
  name: 'alexandesigner:frontlabs',
  version: '0.0.3',
  summary: 'A front-end labs that helps you build fast an modern web and mobile apps.',
  git: 'https://github.com/allanalexandre/frontlabs-meteor',
  documentation: 'README.md'
});

// Package Config
Package.onUse(function(api) {

// Meteor@1.2.1
api.versionsFrom('1.2.1');

// Dependencies
api.use('jquery', 'client');

// Assets Files
api.addAssets('fonts/proxima-nova/proximanova-regular-webfont.ttf', 'client');
api.addAssets('fonts/proxima-nova/proximanova-regular-webfont.eot', 'client');
api.addAssets('fonts/proxima-nova/proximanova-regular-webfont.woff', 'client');
api.addAssets('fonts/proxima-nova/proximanova-regular-webfont.woff2', 'client');
api.addAssets('fonts/proxima-nova/proximanova-regular-webfont.svg', 'client');
api.addAssets('fonts/proxima-nova/proximanova-semibold-webfont.ttf', 'client');
api.addAssets('fonts/proxima-nova/proximanova-semibold-webfont.eot', 'client');
api.addAssets('fonts/proxima-nova/proximanova-semibold-webfont.woff', 'client');
api.addAssets('fonts/proxima-nova/proximanova-semibold-webfont.woff2', 'client');
api.addAssets('fonts/proxima-nova/proximanova-semibold-webfont.svg', 'client');
api.addAssets('fonts/proxima-nova/proximanova-bold-webfont.ttf', 'client');
api.addAssets('fonts/proxima-nova/proximanova-bold-webfont.eot', 'client');
api.addAssets('fonts/proxima-nova/proximanova-bold-webfont.woff', 'client');
api.addAssets('fonts/proxima-nova/proximanova-bold-webfont.woff2', 'client');
api.addAssets('fonts/proxima-nova/proximanova-bold-webfont.svg', 'client');
api.addAssets('fonts/volkswagen/volkswagen-regular-webfont.eot', 'client');
api.addAssets('fonts/volkswagen/volkswagen-regular-webfont.woff', 'client');
api.addAssets('fonts/volkswagen/volkswagen-regular-webfont.woff2', 'client');
api.addAssets('fonts/volkswagen/volkswagen-regular-webfont.svg', 'client');
api.addAssets('fonts/volkswagen/volkswagen-bold-webfont.ttf', 'client');
api.addAssets('fonts/volkswagen/volkswagen-bold-webfont.eot', 'client');
api.addAssets('fonts/volkswagen/volkswagen-bold-webfont.woff', 'client');
api.addAssets('fonts/volkswagen/volkswagen-bold-webfont.woff2', 'client');
api.addAssets('fonts/volkswagen/volkswagen-bold-webfont.svg', 'client');
api.addAssets('fonts/baseicons/baseicons.ttf', 'client');
api.addAssets('fonts/baseicons/baseicons.eot', 'client');
api.addAssets('fonts/baseicons/baseicons.woff', 'client');
api.addAssets('fonts/baseicons/baseicons.svg', 'client');

// Styles (SCSS)
api.addAssets('scss/helpers/_mixins.scss', 'client');
api.addAssets('scss/helpers/_utilities.scss', 'client');
api.addAssets('scss/helpers/_reset.scss', 'client');
api.addAssets('scss/base/_fonts.scss', 'client');
api.addAssets('scss/base/_text.scss', 'client');
api.addAssets('scss/base/_colors.scss', 'client');
api.addAssets('scss/base/_images.scss', 'client');
api.addAssets('scss/base/_depths.scss', 'client');
api.addAssets('scss/base/_tables.scss', 'client');
api.addAssets('scss/base/_forms.scss', 'client');
api.addAssets('scss/base/_grid.scss', 'client');
api.addAssets('scss/base/_icons.scss', 'client');
api.addAssets('scss/base/_flexbox.scss', 'client');
api.addAssets('scss/base/_flexbox-grid.scss', 'client');
api.addAssets('scss/base/_headings.scss', 'client');
api.addAssets('scss/base/_list.scss', 'client');
api.addAssets('scss/components/_alert.scss', 'client');
api.addAssets('scss/components/_article.scss', 'client');
api.addAssets('scss/components/_buttons.scss', 'client');
api.addAssets('scss/components/_breadcrumb.scss', 'client');
api.addAssets('scss/components/_badge.scss', 'client');
api.addAssets('scss/components/_footer.scss', 'client');
api.addAssets('scss/components/_header.scss', 'client');
api.addAssets('scss/components/_navigation.scss', 'client');
api.addAssets('scss/components/_panel.scss', 'client');
api.addAssets('scss/components/_dialog.scss', 'client');
api.addAssets('scss/components/_loading.scss', 'client');
api.addAssets('scss/components/_collapse.scss', 'client');
api.addAssets('scss/components/_pagination.scss', 'client');
api.addAssets('scss/layout/adaptive/_adaptive.scss', 'client');
api.addAssets('scss/layout/adaptive/_desktop-wide.scss', 'client');
api.addAssets('scss/layout/adaptive/_desktop.scss', 'client');
api.addAssets('scss/layout/adaptive/_tablet.scss', 'client');
api.addAssets('scss/layout/adaptive/_mobile-wide.scss', 'client');
api.addAssets('scss/layout/adaptive/_mobile.scss', 'client');
api.addAssets('scss/layout/adaptive/_no-screen.scss', 'client');
api.addAssets('scss/_defaults.scss', 'client');
api.addAssets('scss/core.scss', 'client');

});

// Tests
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('alexandesigner:frontlabs');
  api.addFiles('frontlabs-tests.js');
});
