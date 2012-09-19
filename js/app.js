/*global $*/
define(
  ['marionette','vent','ext','views/homeView','require'],
  function(
      marionette,
      vent,
      ext,
      HomeView){
    "use strict";

    var app = new marionette.Application();

    app.addRegions({
      content : '#content',
    });

    var todoBinding = vent.todo.bindTo('all', function(e) {
      require(["todo/todoApp"], function() {
        vent.todo.unbindFrom(todoBinding); 
        vent.todo.trigger(e);
      });
    });

    var developersBinding = vent.developers.bindTo('all', function(e) {
      require(["developers/developers"], function() {
        vent.developers.unbindFrom(developersBinding); 
        vent.developers.trigger(e);
      });
    });

    vent.global.on('goto:home',function() {
      app.content.show(new HomeView()); 
    });

    return app;

  }
)
