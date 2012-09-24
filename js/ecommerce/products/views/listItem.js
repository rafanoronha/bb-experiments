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
      //FIXME this is wrong
      var url = '#/products/'; 

      this.ui.link.attr('href', url + this.model.get('id'));
    }

  });

});
