define(
  [
   'app',
   'events/ecommerce',
   'ecommerce/product',
   'ecommerce/productList',
   'ecommerce/views/list',
   'ecommerce/views/listItem',
   'ecommerce/views/show'
  ], function(app, ecommerceEvents, Product, ProductList, ListView, ListItemView, ShowView){

  "use strict";

  var productList = new ProductList(); 
  productList.fetch();

  if (!productList.length) {
    productList.create(new Product({name: 'Flash Disk 4GB', price: 6.99}));
    productList.create(new Product({name: 'Flash Disk 6GB', price: 10.99}));
    productList.create(new Product({name: 'Flash Disk 8GB', price: 14.99}));
    productList.create(new Product({name: 'Flash Disk 10GB', price: 20.99}));
  }

  function index() {
    app.content.show(new ListView({collection: productList}));
  }

  function show(id) {
    var model = productList.get(id);
    app.content.show(new ShowView({model: model }));
  }

  ecommerceEvents.bindTo('goto:products', function() {
    index(); 
  });
   
  ecommerceEvents.bindTo('goto:products:show', function(id) {
    show(id); 
  });

});
