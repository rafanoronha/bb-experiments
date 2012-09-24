define(
  [
   'backbone'
  ], function(Backbone) {

  'use strict';

  return Backbone.Router.extend({
    routes:{
      'shoppingcart': 'shoppingCart'
    },

    shoppingCart: function() {
      this.channel.trigger('goto:cart');
    }

  });

});
