Package.describe({
  name: 'artjc:flexslider',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The best responsive slider. Period. into Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use('templating', 'client');
  api.addFiles('flexslider.js', 'client');
  api.addAssets('flexslider.less', 'client');
  api.addAssets('css/base.less', 'client');
  api.addAssets('css/font.less', 'client');
  api.addAssets('css/mixins.less', 'client');
  api.addAssets('css/resets.less', 'client');
  api.addAssets('css/responsive.less', 'client');
  api.addAssets('css/theme.less', 'client');
  api.addAssets('css/variables.less', 'client');
  api.addAssets('fonts/flexslider-icon.eot', 'client');
  api.addAssets('fonts/flexslider-icon.svg', 'client');
  api.addAssets('fonts/flexslider-icon.ttf', 'client');
  api.addAssets('fonts/flexslider-icon.woff', 'client');
  api.addAssets('images/bg_play_pause.png', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('artjc:flexslider');
  api.addFiles('flexslider-tests.js');
});
