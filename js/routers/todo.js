define(
  [
   'backbone'
  ], function(Backbone) {

  'use strict';

  return Backbone.Router.extend({
    routes:{
      'todos': 'todos',
      'todos/:filter': 'setFilter'
    },

    todos: function(param) {
      this.channel.trigger('nav:index') 
    },

    setFilter : function(param) {
      var filter = param.replace(/todos\//, '');
      this.channel.trigger('nav:filter', filter || '');
    },

  });

});
