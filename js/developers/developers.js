define(
  ['app','vent','developers/dev','developers/devList','developers/views/form','developers/views/list','marionette'],
  function(app, vent, Dev, DevList, FormView, ListView, Marionette){
    "use strict";

    var dev;

    var devList = new DevList(); 
    devList.fetch();

    var developers = {
      index: function() {
        app.content.show(new ListView({collection: devList}));
      },

      newDeveloper: function() {
        dev = new Dev();
        var view = new FormView({model: dev});     
        app.content.show(view);
      }
    };

    // When a dev is saved, navigate to /developers
    vent.on('model:post:save',function(model, resp) {
      if (dev === model) {
        devList.add(dev);
        Marionette.AppRouter.prototype.navigate("developers", { trigger: true });
      }
    });

    return developers;
  }
);
