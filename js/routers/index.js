define(['marionette'],function(marionette) {
  'use strict';

  return marionette.AppRouter.extend({
    appRoutes:{
      '': 'home',
      'developers': 'developers',
      'developers/new': 'newDeveloper',
      'todos': 'todos',
      'todos/:filter': 'setFilter'
    }
  });

});
