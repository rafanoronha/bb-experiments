/*global $*/
define(
  [
   'marionette',
   'ext',
   'views/homeView',
   'initializers',
   'events/ecommerce',
   'events/global',
   'require'
  ], function(marionette, ext, HomeView, initializers, ecommerceEvents, globalEvents){

  "use strict";

  var app = new marionette.Application();

  app.addRegions({
    content : '#content'
  });

  app.addInitializer(initializers.todo);
  app.addInitializer(initializers.developers);

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
