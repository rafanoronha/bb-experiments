/*global $*/
define(
  [
   'marionette',
   'ext',
   'views/homeView',
   'initializers',
   'events/global',
   'require'
  ], function(marionette, ext, HomeView, initializers, globalEvents){

  "use strict";

  var app = new marionette.Application();

  app.addRegions({
    content : '#content'
  });

  app.addInitializer(initializers.todo);
  app.addInitializer(initializers.developers);
  app.addInitializer(initializers.ecommerce.products);
  app.addInitializer(initializers.ecommerce.cart);

  globalEvents.on('nav:home',function() {
    app.content.show(new HomeView()); 
  });

  return app;

  }
)
