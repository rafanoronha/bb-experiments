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
      this.channel.trigger('goto:products');
    },

    showProduct: function(id) {
      this.channel.trigger('goto:products:show', id);
    }

  });

});
