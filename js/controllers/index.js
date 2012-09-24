/*global define*/

define(
  [
   'events/global'
  ], function (globalEvents) {

  "use strict";

  return {

    home: function(param) {
      globalEvents.trigger('goto:home') 
    }

  };

});
