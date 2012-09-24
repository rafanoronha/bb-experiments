/*global define*/

define(
  [
   'marionette',
   'templates'
  ], function (Marionette,templates) {

  "use strict";

  return Marionette.ItemView.extend({
    template : templates.products.show,

    events: {
      'click .addToCart' : 'addToCart'
    },

    addToCart: function(model) {
      this.channels.cart.trigger('action:add', model);
      return false;
    }

  });
});
