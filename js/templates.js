
define(function(require){
  "use strict";
  return {
    home:                       require('tpl!templates/home.tmpl'),

    todo: {
      todoApp:                  require('tpl!todo/templates/todoApp.tmpl'),
      header:                   require('tpl!todo/templates/header.tmpl'),
      footer:                   require('tpl!todo/templates/footer.tmpl'),
      list:                     require('tpl!todo/templates/list.tmpl'),
      listItem:                 require('tpl!todo/templates/listItem.tmpl')
    },

    developers: {
      list:                     require('tpl!developers/templates/list.tmpl'),
      listItem:                 require('tpl!developers/templates/listItem.tmpl'),
      form:                     require('tpl!developers/templates/form.tmpl')
    },

    products: {
      list:                     require('tpl!ecommerce/products/templates/list.tmpl'),
      listItem:                 require('tpl!ecommerce/products/templates/listItem.tmpl'),
      show:                     require('tpl!ecommerce/products/templates/show.tmpl')
    },

    cart: {
      cart:                     require('tpl!ecommerce/cart/templates/cart.tmpl'),
      cartItem:                 require('tpl!ecommerce/cart/templates/cartItem.tmpl')
    }

  };
});

