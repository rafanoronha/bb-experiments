/*global define*/

define(
  [
   'marionette',
   'templates'
  ], function (Marionette,templates) {

  "use strict";

  return Marionette.Layout.extend({
    template : templates.todo.todoApp,

    regions: {
      todoAppHeader : '#todoAppHeader',
      todoAppMain   : '#todoAppMain',
      todoAppFooter : '#todoAppFooter'
    },

    controlRegionsRendering: function(){
      if (this.collection.length === 0) {
        this.todoAppMain.$el.hide();
        this.todoAppFooter.$el.hide();
      } else {
        this.todoAppMain.$el.show();
        this.todoAppFooter.$el.show();
      }
    },    
    
    initialize: function(){
      this.bindTo(this.collection, 'all', this.controlRegionsRendering, this);
    }

  });

});
