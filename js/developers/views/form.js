/*global define*/

define(
  [
   'marionette',
   'templates'
  ], function (Marionette,templates) {

  "use strict";

  return Marionette.ItemView.extend({
    template : templates.developers.form,

    ui : {
      name: '.name',
      ninja: '.ninja'
    },

    events : {
      'submit form': 'submit'
    },

    submit: function() {
      this.model.set({
        name: this.ui.name.val(),
        ninja: this.ui.ninja.is(':checked')
      });
      this.model.save();
    },

    initialize : function() {
      this.bindTo(this.model, 'change', this.render, this);
    },

    onRender : function() {
    }

  });
});
