define(
  [
   'app',
   'events/ecommerce',
   'ecommerce/product',
   'ecommerce/cart/cartItem',
   'ecommerce/cart/cartItemList',
   'ecommerce/cart/views/cart',
   'ecommerce/cart/views/cartItem'
  ], function(app, ecommerceEvents, Product, CartItem, CartItemList, CartView, CartItemView){

  "use strict";

  var cartItemList = new CartItemList(); 
  cartItemList.fetch();

  function show(id) {
    app.content.show(new CartView({collection: cartItemList }));
  }

  function add(product) {
    var item = new CartItem({
      product: product,
      quantity: 1
    }); 
    cartItemList.add(item);
  }

  ecommerceEvents.bindTo('goto:cart', function() {
    show(); 
  });

  ecommerceEvents.bindTo('action:addToCart', function(product) {
    add(product); 
  });

});
