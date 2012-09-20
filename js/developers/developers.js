define(
  [
   'app',
   'events/developers',
   'events/global',
   'developers/dev',
   'developers/devList',
   'developers/views/form',
   'developers/views/list',
   'marionette'
  ], function(app, developersEvents, globalEvents, Dev, DevList, FormView, ListView, Marionette){

  "use strict";

  var dev;

  var devList = new DevList(); 
  devList.fetch();
    
  function index() {
    app.content.show(new ListView({collection: devList}));
  }

  function newDeveloper() {
    dev = new Dev();
    var view = new FormView({model: dev});     
    app.content.show(view);
  }

  developersEvents.bindTo('goto:developers', function() {
    index(); 
  });

  developersEvents.bindTo('goto:developers:new', function() {
    newDeveloper(); 
  });

  // When a dev is saved, navigate to /developers
  globalEvents.on('model:post:save',function(model, resp) {
    if (dev === model) {
      devList.add(dev);
      Marionette.AppRouter.prototype.navigate("developers", { trigger: true });
    }
  });

});
