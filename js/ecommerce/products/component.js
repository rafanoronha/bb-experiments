define(
  [
   'underscore',
   'app',
   'ecommerce/products/product',
   'ecommerce/products/productList',
   'ecommerce/products/views/list',
   'ecommerce/products/views/listItem',
   'ecommerce/products/views/show'
  ], function(_, app, Product, ProductList, ListView, ListItemView, ShowView){

  "use strict";

  var viewOptions;

  var productList = new ProductList(); 
  productList.fetch();

  if (!productList.length) {
    productList.create(new Product({name: 'Flash Disk 4GB', price: 6.99}));
    productList.create(new Product({name: 'Flash Disk 6GB', price: 10.99}));
    productList.create(new Product({name: 'Flash Disk 8GB', price: 14.99}));
    productList.create(new Product({name: 'Flash Disk 10GB', price: 20.99}));
  }

  function index() {
    var options = _.extend({ collection: productList }, viewOptions);
    app.content.show(new ListView(options));
  }

  function show(id) {
    var model = productList.get(id);
    var options = _.extend({ model: model }, viewOptions);
    app.content.show(new ShowView(options));
  }

  var Products = function() {
    this.init = function() {

      viewOptions = {
        component: this.component
      };

      this.channel.on('nav:index', function() {
        index(); 
      });

      this.channel.on('nav:show', function(id) {
        show(id);
      });
   };
  };

  var products = new Products();
  return products;

});
