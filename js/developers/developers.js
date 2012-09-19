define(
  ['app','vent','developers/dev','developers/devList','developers/views/form','developers/views/list','marionette'],
  function(app, vent, Dev, DevList, FormView, ListView, Marionette){
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

    vent.developers.bindTo('goto:developers', function() {
      index(); 
    });

    vent.developers.bindTo('goto:developers:new', function() {
      newDeveloper(); 
    });

    // When a dev is saved, navigate to /developers
    vent.global.on('model:post:save',function(model, resp) {
      if (dev === model) {
        devList.add(dev);
        Marionette.AppRouter.prototype.navigate("developers", { trigger: true });
      }
    });

  }
);
