require.config({
  shim: {
    'backgrid': {
      deps: ['jquery', 'backbone', 'underscore'],
      exports: 'Backgrid'
    }
  },
  paths: {
    text: 'require/text',
    marionette: 'bower_components/marionette/lib/core/backbone.marionette',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr',
    jquery: 'bower_components/jquery/jquery',
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
    'backbone.paginator': 'bower_components/backbone.paginator/lib/backbone.paginator',
    'backgrid': 'bower_components/backgrid/lib/backgrid'
  },
  packages: [

  ]
});
