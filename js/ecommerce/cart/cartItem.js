define(
  [
   'backbone',
   'ecommerce/product',
   'lib/backbone-localStorage',
   'lib/backbone-relational'
  ], function(Backbone, Product){

  'use strict';

  return Backbone.RelationalModel.extend({
    localStorage: new Backbone.LocalStorage('bbe_cartItem'),

    relations: [{
      type: Backbone.HasOne,
      key: 'product',
      relatedModel: Product,
      includeInJSON: true//Backbone.Model.prototype.idAttribute
    }],

    defaults: {
    },

    initialize : function() {
      if (this.isNew()) this.set('created', Date.now());
    }

  });

}); 
