/*global define*/

define(
  [
   'events/ecommerce',
   'events/global'
  ], function (ecommerceEvents, globalEvents) {

  "use strict";

  return {

    home: function(param) {
      globalEvents.trigger('goto:home') 
    },

    products: function(param) {
      ecommerceEvents.trigger('goto:products');
    },

    showProduct: function(id) {
      ecommerceEvents.trigger('goto:products:show', id);
    },

    shoppingCart: function() {
      ecommerceEvents.trigger('goto:cart');
    }

  };

});
