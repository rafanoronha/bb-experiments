define(
  [
   'marionette',
   'component',
   'routers/ecommerce/cart',
   'events/ecommerce/cart',
   'events/global'
  ], function(Marionette, Component, Router, cartEvents, globalEvents){

  "use strict";

  function initializer(options) {
    var router = new Router();

    var component = new Component({
      name: "ecommerce/cart/cart",

      channels: [
        { component: cartEvents },
        { global: globalEvents }
      ],

      embrace: [
        router
      ]

    });
  }

  return initializer; 

});
