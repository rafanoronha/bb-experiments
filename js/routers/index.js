define(
  [
   'backbone',
   'events/global'
  ], function(Backbone, globalEvents) {

  'use strict';

  return Backbone.Router.extend({

    routes:{
      '': 'home'
    },

    home: function(param) {
      globalEvents.trigger('nav:home') 
    }

  });

});
