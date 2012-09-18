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

    vent.on('goto:home',function() {
      app.content.show(new HomeView()); 
    });

    vent.on('goto:developers',function() {
      require(["developers/developers"], function(developers) {
        developers.index();
      });
    });

    vent.on('goto:developers:new',function() {
      require(["developers/developers"], function(developers) {
        developers.newDeveloper();
      });
    });

    vent.on('goto:todo',function() {
      require(["todo/todoApp"], function(todoApp) {
        todoApp.show();
      });
    });

    return app;

  }
)
