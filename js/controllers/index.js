/*global define*/

define(['vent'], function (vent) {
  "use strict";

  return {

    home: function(param) {
      vent.global.trigger('goto:home') 
    },

    todos: function(param) {
      vent.todo.trigger('goto:todo') 
    },

    setFilter : function(param) {
      var filter = param.replace(/todos\//, '');
      vent.todo.trigger('todoList:filter', filter || '');
    },

    developers: function(param) {
      vent.developers.trigger('goto:developers');
    },

    newDeveloper: function(param) {
      vent.developers.trigger('goto:developers:new');
    }

  };

});
