/*global define, $*/

define(
  [
   'marionette',
   'events/todo',
   'templates',
   'todo/views/activeCount'
  ], function (Marionette,todoEvents,templates,ActiveCount) {

  "use strict"; 

  return Marionette.Layout.extend({
    template : templates.todo.footer,

    regions : {
      count : '#todo-count strong'
    },

    ui : {
      filters : '#filters a'
    },

    events : {
      'click #clear-completed' : 'onClearClick'
    },

    initialize : function() {
      this.bindTo(todoEvents, 'todoList:filter', this.updateFilterSelection, this);
    },

    onRender : function() {
      this.count.show(new ActiveCount({collection : this.collection}));
    },

    updateFilterSelection : function(filter) {
      var selectedFilterSelector; 
      if (filter) {
        selectedFilterSelector = '[href="#/todos/' + filter + '"]';
      } else {
        selectedFilterSelector = '[href="#/todos"]';
      }
      this.ui.filters.removeClass('selected').filter(selectedFilterSelector).addClass('selected');
    },

    onClearClick : function() {
      todoEvents.trigger('todoList:clear:completed');
    }

  });

});
