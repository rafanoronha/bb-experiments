/*global define*/

define(
  [
   'marionette',
   'templates'
  ], function (Marionette,templates) {

  "use strict";

  return Marionette.ItemView.extend({
    tagName : 'tr',
    template : templates.cart.cartItem,

  });

});
