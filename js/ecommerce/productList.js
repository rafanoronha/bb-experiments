define(
  [
   'backbone',
   'ecommerce/product',
   'lib/backbone-localStorage'
  ], function(Backbone,Product) {

  'use strict';

  return Backbone.Collection.extend({
    model: Product,

    localStorage: new Backbone.LocalStorage('bbe_product'),

    comparator: function(model) {
      return model.get('created');
    }

  });

});
