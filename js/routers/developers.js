define(
  [
   'backbone'
  ], function(Backbone) {

  'use strict';

  return Backbone.Router.extend({
    routes:{
      'developers': 'developers',
      'developers/new': 'newDeveloper',
    },

    developers: function(param) {
      this.channel.trigger('nav:index');
    },

    newDeveloper: function(param) {
      this.channel.trigger('nav:new');
    }

  });

});
