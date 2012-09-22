define(
  [
   'marionette',
   'component',
   'routers/todo',
   'events/global'
  ], function(Marionette, Component, Router, globalEvents){

  "use strict";

  function initializer(options) {
    var router = new Router();

    var component = new Component({
      name: "todo/todoApp",

      channels: [
        { global: globalEvents }
      ],

      embrace: [
        router
      ]

    });
  }

  return initializer; 

});
