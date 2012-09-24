define(
  [
   'underscore',
   'backbone',
   'require'
  ], function(_, Backbone, require){

  "use strict";

  // Component
  // -----------

  // Components facilitate the implementation of loosely coupled Backbone.js based applications.

  var Component = function(options) {
    if(!options.name) {
      throw('a name must be given to a component');
    }
    this.name = options.name;

    options = _.extend(this.options || {}, options);

    this._configure(options);
    this._embraceObjectsFromOptions(options);
    this._lazyLoadComponentModule(options);
  };

  _.extend(Component.prototype, {

    // Embraces one or more objects as pieces of this component.
    embrace: function() {
      var args = Array.prototype.slice.call(arguments);

      _.each(args, function(obj) {
        obj.component = this;
        obj.channels = this.channels;
        obj.channel = obj.channels.component;
      }, this);
    },

    // Configure this component through the provided `options`.
    _configure: function(options) {
      this.channels = options.channels || {};

      if (!this.channels.component) {
        this.channels.component = _.extend({}, Backbone.Events);
      }
      this.componentChannel = this.channels.component;
    },

    // Embraces objects coming from `options`.
    _embraceObjectsFromOptions: function(options) {
      var embraced = options.embrace || [];
      this.embrace.apply(this, embraced);
    },

    // Prepares the lazy loading of the module which provide this component implementation.
    _lazyLoadComponentModule: function() {
      var component = this;

      function callback() {
        var that = this, args = arguments;
        require([component.name], function(module) {
          component.componentChannel.off('all', callback); 
          component.embrace(module); 
          if (_.isFunction(module.init)) {
            module.init();
          }
          component.componentChannel.trigger.apply(that, args);
        });
      }

      this.componentChannel.on('all', callback);
    }

  });

  return Component; 

});
