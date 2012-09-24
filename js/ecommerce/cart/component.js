define(
  [
   'app',
   'ecommerce/products/product',
   'ecommerce/cart/cartItem',
   'ecommerce/cart/cartItemList',
   'ecommerce/cart/views/cart',
   'ecommerce/cart/views/cartItem'
  ], function(app, Product, CartItem, CartItemList, CartView, CartItemView){

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

  var Cart = function() {
    this.init = function() {
      this.channel.on('goto:cart', function() {
        show(); 
      });

      this.channel.on('action:addToCart', function(product) {
        add(product);
      });
   };
  };

  return new Cart();

});
