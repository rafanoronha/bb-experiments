/*global define*/

define(
  [
   'events/todo',
   'events/ecommerce',
   'events/global'
  ], function (todoEvents, ecommerceEvents, globalEvents) {

  "use strict";

  return {

    home: function(param) {
      globalEvents.trigger('goto:home') 
    },

    todos: function(param) {
      todoEvents.trigger('goto:todo') 
    },

    setFilter : function(param) {
      var filter = param.replace(/todos\//, '');
      todoEvents.trigger('todoList:filter', filter || '');
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
