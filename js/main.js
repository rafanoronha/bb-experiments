require.config({
  paths : {
    underscore : 'lib/underscore',
    backbone   : 'lib/backbone',
    marionette : 'lib/backbone.marionette',
    component  : 'lib/component',
    jquery     : 'lib/jquery',
    tpl        : 'lib/tpl',
    bootstrap  : 'lib/bootstrap'
  },
  shim : {
    'lib/backbone-localStorage' : ['backbone'],
    'lib/backbone-relational'   : ['backbone'],
    underscore : {
      exports : '_'
    },
    backbone : {
      exports : 'Backbone',
      deps : ['jquery','underscore']
    },
    marionette : {
      exports : 'Backbone.Marionette',
      deps : ['backbone']
    }
  },
  deps : ['jquery','underscore']
});

require(
  [
   'app',
   'backbone',
   'routers/index'
  ], function(app,Backbone,Router){

  "use strict";

  app.start();

  new Router();

  Backbone.history.start();

});
