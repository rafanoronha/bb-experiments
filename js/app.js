/*global $*/
define(
  [
   'marionette',
   'ext',
   'views/homeView',
   'initializers/todo',
   'initializers/developers',
   'events/ecommerce',
   'events/global',
   'require'
  ], function(marionette, ext, HomeView, todoInitializer, developersInitializer, ecommerceEvents, globalEvents){

  "use strict";

  var app = new marionette.Application();

  app.addRegions({
    content : '#content'
  });

  app.addInitializer(todoInitializer);
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
