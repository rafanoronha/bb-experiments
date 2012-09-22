define(
  [
   'marionette'
  ], function(marionette) {

  'use strict';

  return marionette.AppRouter.extend({
    appRoutes:{
      '': 'home',
      'products': 'products',
      'products/:id': 'showProduct',
      'shoppingcart': 'shoppingCart'
    }

  });

});
