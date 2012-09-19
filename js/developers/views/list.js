/*global define*/

define(['marionette','templates','developers/views/listItem'], function (Marionette,templates,ListItem) {
  "use strict";

  return Marionette.CompositeView.extend({
    template : templates.developers.list,
    itemView : ListItem,
    itemViewContainer : '#list',

    ui : {
      toggle : '#toggle-all-ninja'
    },

    events : {
      'change #toggle-all-ninja' : 'onToggleAllNinja'
    },

    initialize : function() {
      this.bindTo(this.collection, 'all', this.updateToggleCheckbox, this);
    },

    onRender : function() {
      this.updateToggleCheckbox();
    },

    updateToggleCheckbox : function() {
      function reduce(left, right) { return left && right.get('ninja'); }
      var allNinjas = this.collection.reduce(reduce,true);
      this.ui.toggle.prop('checked', allNinjas);
    },

    onToggleAllNinja : function(evt) {
      var isChecked = evt.currentTarget.checked;
      this.collection.each(function(todo){
        todo.save({'ninja': isChecked});
      });
    }
  });
});

