define(
  [
   'backbone',
   'lib/backbone-localStorage'
  ], function(Backbone){

  'use strict';

  return Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage('bbe_dev'),

    defaults: {
    },

    initialize : function() {
      if (this.isNew()) this.set('created', Date.now());
    }

  });

});

