define(
  [
   'app',
   'developers/dev',
   'developers/devList',
   'developers/views/form',
   'developers/views/list',
   'marionette'
  ], function(app, Dev, DevList, FormView, ListView, Marionette){

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
 
  var Component = function() {
    this.init = function() {
      this.channel.on('goto:developers', function() {
        index(); 
      });

      this.channel.on('goto:developers:new', function() {
        newDeveloper(); 
      });

      // When a dev is saved, navigate to /developers
      this.channels.global.on('model:post:save',function(model, resp) {
        if (dev === model) {
          devList.add(dev);
          Marionette.AppRouter.prototype.navigate("developers", { trigger: true });
        }
      });
    };
  };

  return new Component();

});
