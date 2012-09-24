define(
  [
   'marionette',
   'component',
   'routers/developers',
   'events/global'
  ], function(Marionette, Component, Router, globalEvents){

  "use strict";

  function initializer(options) {
    var router = new Router();

    var component = new Component({
      name: "developers/developers",

      channels: {
        global: globalEvents
      },

      embrace: [
        router
      ]

    });
  }

  return initializer; 

});
