define(
  [
   'app',
   'todo/todoList',
   'todo/views/header',
   'todo/views/footer',
   'todo/views/list',
   'todo/views/todoApp',
   'marionette'
  ], function(app, TodoList, Header, Footer, ListView, TodoAppView){

  "use strict";

  var todoList = new TodoList();
 
  function index() {
    var viewOptions = {
      collection : todoList,
      component: todoApp.component
    };

    var todoAppView = new TodoAppView(viewOptions);
    app.content.show(todoAppView);   

    todoAppView.todoAppHeader.show(new Header(viewOptions));
    todoAppView.todoAppMain.show(new ListView(viewOptions));
    todoAppView.todoAppFooter.show(new Footer(viewOptions));

    todoList.fetch();
  }

  var TodoApp = function() {
    this.init = function() {

      this.channel.on('goto:todo', function() {
        index(); 
      });

      this.channel.on('todoList:filter',function(filter) {
        filter = filter || 'all';
        $('#todoapp').attr('class', 'filter-' + filter);
      });

      this.channel.on('todoList:clear:completed',function(){
        function destroy(todo) { todo.destroy(); }
        todoList.getCompleted().forEach(destroy);
      });

    };
  };

  var todoApp = new TodoApp();
  return todoApp;

});
