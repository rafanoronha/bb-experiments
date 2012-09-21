/*global $*/
define(
  [
   'marionette',
   'ext',
   'views/homeView',
   'events/todo',
   'initializers/developers',
   'events/ecommerce',
   'events/global',
   'require'
  ], function(marionette, ext, HomeView, todoEvents, developersInitializer, ecommerceEvents, globalEvents){

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

  app.addInitializer(developersInitializer);

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
