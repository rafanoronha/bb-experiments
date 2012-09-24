define(
  [
   'marionette',
   'component',
   'routers/ecommerce/products',
   'events/ecommerce/cart',
   'events/global'
  ], function(Marionette, Component, Router, cartEvents, globalEvents){

  "use strict";

  function initializer(options) {
    var router = new Router();

    var component = new Component({
      name: "ecommerce/products/component",

      channels: {
        cart: cartEvents,
        global: globalEvents
      },

      embrace: [
        router
      ]

    });
  }

  return initializer; 

});
