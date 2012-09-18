/*global define*/

define(['marionette','templates'], function (Marionette,templates) {
  "use strict";

  return Marionette.ItemView.extend({
    tagName : 'tr',
    template : templates.developers.listItem,

    ui : {
      ninja: '.ninja'
    },

    events : {
      'change .ninja' : 'ninjaChanged'
    },

    initialize : function() {
      this.bindTo(this.model, 'change', this.render, this);
    },

    onRender : function() {
      this.ui.ninja.attr('checked', this.model.get('ninja'));
    },

    ninjaChanged : function(evt) {
      var isChecked = evt.currentTarget.checked;
      this.model.save({'ninja': isChecked});
    }

  });
});
