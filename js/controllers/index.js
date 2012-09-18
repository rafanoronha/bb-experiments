/*global define*/

define(['vent'], function (vent) {
  "use strict";

  return {

    home: function(param) {
      vent.trigger('goto:home') 
    },

    todos: function(param) {
      vent.trigger('goto:todo') 
    },

    setFilter : function(param) {
      var filter = param.replace(/todos\//, '');
      vent.trigger('todoList:filter', filter || '');
    },

    developers: function(param) {
      vent.trigger('goto:developers');
    },

    newDeveloper: function(param) {
      vent.trigger('goto:developers:new');
    }

  };

});
