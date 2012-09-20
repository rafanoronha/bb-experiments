/*global $*/
define(
  [
   'marionette',
   'ext',
   'views/homeView',
   'events/todo',
   'events/developers',
   'events/ecommerce',
   'events/global',
   'require'
  ], function(marionette, ext, HomeView, todoEvents, developersEvents, ecommerceEvents, globalEvents){

  "use strict";

  var app = new marionette.Application();

  app.addRegions({
    content : '#content'
  });

  var todoBinding = todoEvents.bindTo('all', function() {
    var that = this, args = arguments;
    require(["todo/todoApp"], function() {
      todoEvents.unbindFrom(todoBinding); 
      todoEvents.trigger.apply(that, args);
    });
  });

  var developersBinding = developersEvents.bindTo('all', function() {
    var that = this, args = arguments;
    require(["developers/developers"], function() {
      developersEvents.unbindFrom(developersBinding); 
      developersEvents.trigger.apply(that, args);
    });
  });

  var ecommerceBinding = ecommerceEvents.bindTo('all', function() {
    var that = this, args = arguments;
    require(["ecommerce/ecommerce"], function() {
      ecommerceEvents.unbindFrom(ecommerceBinding); 
      ecommerceEvents.trigger.apply(that, args);
    });
  });

  globalEvents.on('goto:home',function() {
    app.content.show(new HomeView()); 
  });

  return app;

  }
)
