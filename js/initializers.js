define(function(require){
  "use strict";
  return {
    developers:                 require('initializers/developers'),
    todo:                       require('initializers/todo'),

    ecommerce: {
      products:                 require('initializers/ecommerce/products'),
      cart:                     require('initializers/ecommerce/cart')
    }
  };
}); 
