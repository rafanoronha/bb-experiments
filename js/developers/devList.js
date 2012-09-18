define(['backbone','developers/dev','lib/backbone-localStorage'],function(Backbone,Dev) {
  'use strict';

  return Backbone.Collection.extend({
    model: Dev,

    localStorage: new Backbone.LocalStorage('bbe_dev'),

    comparator: function( todo ) {
      return todo.get('created');
    }
  });

});
