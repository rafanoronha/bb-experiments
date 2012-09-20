/*global define*/

define(
  [
   'marionette',
   'templates'
  ], function (Marionette,templates) {

  "use strict";

  return Marionette.ItemView.extend({
    tagName : 'tr',
    template : templates.products.listItem,

    ui : {
      link: 'a'
    },

    onRender : function() {
      this.ui.link.attr('href', '#/products/' + this.model.get('id'));
    }

  });

});
