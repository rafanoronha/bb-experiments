define(['marionette'],function(marionette){
  "use strict";

  var vent = {};

  vent.developers = new marionette.EventAggregator();
  vent.todo = new marionette.EventAggregator();
  vent.global = new marionette.EventAggregator();

  return vent;

});
