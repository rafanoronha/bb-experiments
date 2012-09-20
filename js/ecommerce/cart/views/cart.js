/*global define*/

define(
  [
   'marionette',
   'templates',
   'ecommerce/cart/views/cartItem'
  ], function (Marionette,templates,CartItem) {

  "use strict";

  return Marionette.CompositeView.extend({
    template : templates.cart.cart,
    itemView : CartItem,
    itemViewContainer : '#list',
  });

});
