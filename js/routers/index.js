define(
  [
   'marionette'
  ], function(marionette) {

  'use strict';

  return marionette.AppRouter.extend({
    appRoutes:{
      '': 'home',
      'developers': 'developers',
      'developers/new': 'newDeveloper',
      'products': 'products',
      'products/:id': 'showProduct',
      'shoppingcart': 'shoppingCart',
      'todos': 'todos',
      'todos/:filter': 'setFilter'
    }

  });

});
