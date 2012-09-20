/*global define*/

define(
  [
   'events/todo',
   'events/developers',
   'events/ecommerce',
   'events/global'
  ], function (todoEvents, developersEvents, ecommerceEvents, globalEvents) {

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

    developers: function(param) {
      developersEvents.trigger('goto:developers');
    },

    newDeveloper: function(param) {
      developersEvents.trigger('goto:developers:new');
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
