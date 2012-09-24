define(
  [
   'backbone',
   'ecommerce/products/product',
   'lib/backbone-localStorage'
  ], function(Backbone,Product) {

  'use strict';

  return Backbone.Collection.extend({
    model: Product,

    localStorage: new Backbone.LocalStorage('bbe_cart'),

    comparator: function(model) {
      return model.get('created');
    }

  });

});
