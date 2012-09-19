define(
  ['app','vent','todo/todoList','todo/views/header','todo/views/footer','todo/views/list','todo/views/todoApp','marionette'],
  function(
      app, vent, TodoList, Header, Footer, ListView, TodoAppView){
    "use strict";

    var todoList = new TodoList(); 

    function index() {
      var viewOptions = {
        collection : todoList
      };

      var todoAppView = new TodoAppView(viewOptions);
      app.content.show(todoAppView);   

      todoAppView.todoAppHeader.show(new Header(viewOptions));
      todoAppView.todoAppMain.show(new ListView(viewOptions));
      todoAppView.todoAppFooter.show(new Footer(viewOptions));

      todoList.fetch();
    }

    vent.todo.bindTo('goto:todo', function() {
      index(); 
    });

    vent.todo.bindTo('todoList:filter',function(filter) {
      filter = filter || 'all';
      $('#todoapp').attr('class', 'filter-' + filter);
    });

    vent.todo.bindTo('todoList:clear:completed',function(){
      function destroy(todo) { todo.destroy(); }
      todoList.getCompleted().forEach(destroy);
    });

  }
);
