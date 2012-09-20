/*global define*/

define(
  [
   'marionette',
   'templates',
   'events/ecommerce'
  ], function (Marionette,templates,ecommerceEvents) {

  "use strict";

  return Marionette.ItemView.extend({
    template : templates.products.show,

    events: {
      'click .addToCart' : 'addToCart'
    },

    addToCart: function(model) {
      ecommerceEvents.trigger('action:addToCart', model);
      return false;
    }

  });
});
