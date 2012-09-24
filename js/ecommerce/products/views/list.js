/*global define*/

define(
  [
   'marionette',
   'templates',
   'ecommerce/products/views/listItem'
  ], function (Marionette,templates,ListItem) {

  "use strict";

  return Marionette.CompositeView.extend({
    template : templates.products.list,
    itemView : ListItem,
    itemViewContainer : '#list',
  });

});
