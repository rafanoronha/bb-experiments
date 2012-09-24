define(
  [
   'backbone'
  ], function(Backbone) {

  'use strict';

  return Backbone.Router.extend({
    routes:{
      'products': 'products',
      'products/:id': 'showProduct'
    },

    products: function(param) {
      this.channel.trigger('nav:index');
    },

    showProduct: function(id) {
      this.channel.trigger('nav:show', id);
    }

  });

});
