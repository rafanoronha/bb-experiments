/*global $*/
define(
  ['marionette','ext','views/homeView',
   'events/todo','events/developers','events/global','require'],
  function(
      marionette,
      ext,
      HomeView,
      todoEvents,
      developersEvents,
      globalEvents){
    "use strict";

    var app = new marionette.Application();

    app.addRegions({
      content : '#content',
    });

    var todoBinding = todoEvents.bindTo('all', function(e) {
      require(["todo/todoApp"], function() {
        todoEvents.unbindFrom(todoBinding); 
        todoEvents.trigger(e);
      });
    });

    var developersBinding = developersEvents.bindTo('all', function(e) {
      require(["developers/developers"], function() {
        developersEvents.unbindFrom(developersBinding); 
        developersEvents.trigger(e);
      });
    });

    globalEvents.on('goto:home',function() {
      app.content.show(new HomeView()); 
    });

    return app;

  }
)
