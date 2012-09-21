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
   'routers/index',
   'controllers/index'
  ], function(app,Backbone,Router,Controller){

  "use strict";

  app.start();

  new Router({
    controller : Controller
  });

  Backbone.history.start();

});
