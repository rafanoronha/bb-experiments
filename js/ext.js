require(
  [
   'backbone',
   'events/global'
  ], function(Backbone, globalEvents){

  "use strict";
  
  var saveFunc = Backbone.Model.prototype.save;
  // Extends the save operation in order to trigger a `model:post:save` event through `vent` event dispatcher.
  _.extend(Backbone.Model.prototype, {
    save: function(key, value, options) {
      // Need to handle both `("key", value)` and `({key: value})` -style calls.
      var hashCallStyle = (_.isObject(key) || key == null);

      if (hashCallStyle) {
        options = value;
      }
      options = options ? _.clone(options) : {};

      options.success = function(model, resp) {
        globalEvents.trigger('model:post:save', model, resp);
      };

      if (hashCallStyle) {
        saveFunc.call(this, key, options);
      } else {
        saveFunc.call(this, key, value, options);
      }
    }  

  });

});
